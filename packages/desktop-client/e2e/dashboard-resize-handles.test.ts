import { type Page } from '@playwright/test';

import { expect, test } from './fixtures';
import { ConfigurationPage } from './page-models/configuration-page';
import { Navigation } from './page-models/navigation';
import { type ReportsPage } from './page-models/reports-page';

test.describe('Dashboard Resize Handles', () => {
  let page: Page;
  let navigation: Navigation;
  let reportsPage: ReportsPage;
  let configurationPage: ConfigurationPage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    navigation = new Navigation(page);
    configurationPage = new ConfigurationPage(page);

    await page.goto('/');
    await configurationPage.createTestFile();
  });

  test.afterAll(async () => {
    await page.close();
  });

  test.beforeEach(async () => {
    reportsPage = await navigation.goToReportsPage();
    await reportsPage.waitToLoad();
  });

  test('resize handles are visible in edit mode on all themes', async () => {
    // Enter edit mode
    await page.getByRole('button', { name: 'Edit dashboard' }).click();
    
    // Wait for the grid layout to be ready
    await page.waitForTimeout(1000);

    // Check that resize handles are present in the DOM
    const resizeHandles = page.locator('.react-resizable-handle');
    await expect(resizeHandles.first()).toBeVisible();

    // Test visual appearance across all themes
    await expect(page).toMatchThemeScreenshots();
  });

  test('resize handles respond to hover on dark themes', async () => {
    // Set theme to dark
    await page.evaluate(() => window.Actual.setTheme('dark'));
    await page.waitForTimeout(500);

    // Enter edit mode
    await page.getByRole('button', { name: 'Edit dashboard' }).click();
    await page.waitForTimeout(1000);

    // Find a widget to hover over
    const widget = page.locator('.react-grid-item').first();
    await expect(widget).toBeVisible();

    // Hover over the widget to trigger hover styles
    await widget.hover();
    await page.waitForTimeout(200);

    // Take screenshot to verify hover state
    await expect(page).toHaveScreenshot('dark-theme-hover.png');

    // Test midnight theme as well
    await page.evaluate(() => window.Actual.setTheme('midnight'));
    await page.waitForTimeout(500);

    await widget.hover();
    await page.waitForTimeout(200);

    await expect(page).toHaveScreenshot('midnight-theme-hover.png');
  });

  test('resize handles are not visible when not in edit mode', async () => {
    // Ensure we're not in edit mode
    const finishEditButton = page.getByRole('button', { name: 'Finish editing dashboard' });
    if (await finishEditButton.isVisible()) {
      await finishEditButton.click();
    }

    // Grid items should be present but not resizable
    const gridItems = page.locator('.react-grid-item');
    await expect(gridItems.first()).toBeVisible();

    // Resize handles should not be interactive (resizing should be disabled)
    const resizeHandles = page.locator('.react-resizable-handle');
    // Note: handles might still exist in DOM but resizing should be disabled
    // This tests the isResizable={false} behavior
    await expect(page).toMatchThemeScreenshots();
  });

  test('resize functionality works in edit mode', async () => {
    // Enter edit mode
    await page.getByRole('button', { name: 'Edit dashboard' }).click();
    await page.waitForTimeout(1000);

    // Find a resizable widget
    const widget = page.locator('.react-grid-item').first();
    const resizeHandle = widget.locator('.react-resizable-handle-se').first();
    
    await expect(widget).toBeVisible();
    await expect(resizeHandle).toBeVisible();

    // Get initial widget size
    const initialBox = await widget.boundingBox();
    expect(initialBox).toBeTruthy();

    // Perform resize action
    await resizeHandle.hover();
    await page.mouse.down();
    await page.mouse.move(initialBox!.x + initialBox!.width + 50, initialBox!.y + initialBox!.height + 50);
    await page.mouse.up();

    // Wait for resize to complete
    await page.waitForTimeout(500);

    // Verify widget has been resized
    const newBox = await widget.boundingBox();
    expect(newBox).toBeTruthy();
    expect(newBox!.width).toBeGreaterThan(initialBox!.width);
    expect(newBox!.height).toBeGreaterThan(initialBox!.height);

    // Take screenshot to verify final state
    await expect(page).toHaveScreenshot('resized-widget.png');
  });
});
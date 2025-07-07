# @actual-app/components

A shared React component library for Actual Budget, providing reusable UI components, icons, and design system utilities used across the web and desktop applications.

## Overview

This package provides:

- **React components** built with react-aria-components for accessibility
- **Icon system** with multiple icon sets (v0, v1, v2, logo)
- **Design tokens** for consistent styling
- **Layout utilities** (Stack, Block, SpaceBetween)
- **Form components** (Input, Select, Button, Toggle)
- **Theme system** with emotion/css integration

## Installation

```bash
# In the monorepo, this is a workspace dependency
yarn workspace @actual-app/web add @actual-app/components
```

## Usage

### Basic Components

```tsx
import { Button } from '@actual-app/components/button'
import { Input } from '@actual-app/components/input'
import { Stack } from '@actual-app/components/stack'

function MyForm() {
  return (
    <Stack spacing={4}>
      <Input placeholder="Enter your name" />
      <Button>Submit</Button>
    </Stack>
  )
}
```

### Icons

```tsx
import { Add, Delete } from '@actual-app/components/icons/v2'
import { Loading } from '@actual-app/components/icons/Loading'

function MyComponent() {
  return (
    <div>
      <Add />
      <Delete />
      <Loading />
    </div>
  )
}
```

### Layout Components

```tsx
import { Stack } from '@actual-app/components/stack'
import { Block } from '@actual-app/components/block'
import { SpaceBetween } from '@actual-app/components/space-between'

function Layout() {
  return (
    <Stack spacing={4}>
      <Block>Content block</Block>
      <SpaceBetween>
        <span>Left</span>
        <span>Right</span>
      </SpaceBetween>
    </Stack>
  )
}
```

### Form Components

```tsx
import { Input } from '@actual-app/components/input'
import { Select } from '@actual-app/components/select'
import { Toggle } from '@actual-app/components/toggle'
import { Label } from '@actual-app/components/label'

function Form() {
  return (
    <div>
      <Label>Name</Label>
      <Input placeholder="Enter name" />
      
      <Label>Category</Label>
      <Select>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </Select>
      
      <Toggle>Enable notifications</Toggle>
    </div>
  )
}
```

## Available Components

### Layout & Structure
- **Stack** - Vertical or horizontal stacking with consistent spacing
- **Block** - Basic container with styling utilities
- **SpaceBetween** - Distributes children with space between
- **View** - Base component for custom layouts
- **Card** - Container with card styling

### Form & Input
- **Input** - Text input with validation states
- **Select** - Dropdown selection component  
- **Button** - Clickable button with variants
- **Toggle** - Switch/checkbox toggle
- **Label** - Form field labels
- **InlineField** - Inline form field wrapper

### Content & Display
- **Text** - Styled text component
- **TextOneLine** - Single-line text with truncation
- **AlignedText** - Text with alignment utilities
- **Paragraph** - Paragraph text styling

### Interactive
- **Menu** - Dropdown menu component
- **Popover** - Floating content overlay
- **Tooltip** - Hover/focus tooltips

### Feedback
- **FormError** - Error message display
- **Loading** - Loading spinner
- **AnimatedLoading** - Animated loading indicator

## Icon System

The library includes multiple icon sets:

### Icon Sets
- **v0** - Legacy icons
- **v1** - First generation icons  
- **v2** - Current primary icon set
- **logo** - Actual Budget logos and branding

### Icon Generation
Icons are generated from SVG files using SVGR:

```bash
yarn generate:icons
```

This processes SVG files in `src/icons/` and generates React components.

## Design System

### Tokens
Design tokens provide consistent values:

```tsx
import { tokens } from '@actual-app/components/tokens'

// Colors, spacing, typography, etc.
const { colors, spacing, typography } = tokens
```

### Theme
Theme system built on emotion/css:

```tsx
import { theme } from '@actual-app/components/theme'

// Access theme values
const primaryColor = theme.colors.primary
```

### Styling
Emotion/css integration for component styling:

```tsx
import { styles } from '@actual-app/components/styles'

// Utility styles and mixins
```

## Accessibility

Components are built with accessibility in mind:

- **react-aria-components** foundation for ARIA compliance
- **Keyboard navigation** support
- **Screen reader** compatibility  
- **Focus management** utilities
- **Semantic HTML** structure

## Development

### Building
Components are built as ES modules with TypeScript definitions.

### Testing
```bash
yarn test
```

Uses Vitest for component testing.

### Adding Components
1. Create component in `src/`
2. Add export to `package.json` exports field
3. Write tests
4. Update documentation

## Peer Dependencies

- **React 18.2+** - React framework
- **React DOM 18.2+** - React DOM renderer

## Technologies

- **React** - UI framework
- **react-aria-components** - Accessibility primitives
- **@emotion/css** - CSS-in-JS styling  
- **SVGR** - SVG to React component generation
- **TypeScript** - Type system
- **Vitest** - Testing framework

## Integration

This package is used by:
- `@actual-app/web` - Main web application
- `desktop-electron` - Desktop application UI

For more information about the overall project structure, see the main [README](../../README.md).
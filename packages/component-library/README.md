# `@actual-app/components`

This package contains the shared component library for Actual Budget. It provides reusable UI components, icons, hooks, and design tokens used across the Actual application.

## Overview

The component library includes:

- **UI Components**: Buttons, inputs, menus, modals, and other interface elements
- **Icons**: SVG icon sets (v0, v1, v2) and loading animations
- **Hooks**: Custom React hooks for common functionality
- **Design System**: Theme tokens, styles, and layout components
- **Types**: TypeScript definitions for component APIs

## Usage

Components are exported individually to enable tree-shaking:

```typescript
import { Button } from '@actual-app/components/button';
import { Input } from '@actual-app/components/input';
import { SvgAdd } from '@actual-app/components/icons/v2';
import { useResponsive } from '@actual-app/components/hooks/useResponsive';
```

## Key Components

- **Button**: Primary interface for user actions
- **Input**: Text input with validation and styling
- **Menu**: Dropdown and context menus
- **Popover**: Floating content containers
- **Text/View**: Layout and typography primitives
- **Icons**: Comprehensive SVG icon library

## Development

This package is part of the Actual monorepo and shared between the web and desktop applications. Components follow consistent design patterns and accessibility guidelines.

### Testing

```bash
yarn test
```

### Icon Generation

```bash
yarn generate:icons
```

## Dependencies

- React 18.2+
- Emotion CSS for styling
- React Aria Components for accessibility

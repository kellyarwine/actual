# @actual-app/components

A React component library for the Actual Budget application providing reusable UI components built on top of React Aria Components.

## Overview

This package contains the core UI components used throughout the Actual Budget application. The components are designed to be accessible, performant, and consistent with the Actual design system.

## Key Features

- **Accessibility-first**: Built on React Aria Components for WCAG compliance
- **Themeable**: Supports Actual's light and dark themes
- **TypeScript**: Full TypeScript support with comprehensive type definitions
- **Tree-shakable**: Import only the components you need

## Components

The library includes a wide range of components for building the Actual Budget interface:

### Form Components

- `Button` - Interactive button component
- `Input` - Text input with validation support
- `Select` - Dropdown selection component
- `Toggle` - Switch/toggle component
- `InlineField` - Inline form field wrapper

### Layout Components

- `Block` - Basic block container
- `Card` - Card container with elevation
- `Stack` - Flexible stacking layout
- `SpaceBetween` - Space-between layout utility
- `View` - Basic view container

### Typography

- `Text` - Text component with styling options
- `TextOneLine` - Single-line text with overflow handling
- `AlignedText` - Text with alignment options
- `Label` - Form label component
- `Paragraph` - Paragraph text component

### Interactive Components

- `Menu` - Context menu component
- `Popover` - Popover/dropdown component
- `Tooltip` - Tooltip component

### Utilities

- `FormError` - Form error message component
- `InitialFocus` - Focus management utility

## Icons

The package also exports icon sets:

- `icons/v0` - Legacy icon set
- `icons/v1` - Current icon set
- `icons/v2` - Next generation icons
- `icons/logo` - Actual logo components
- `AnimatedLoading` - Animated loading spinner
- `Loading` - Static loading indicator

## Hooks

Custom React hooks for common functionality:

- Various utility hooks for responsive design and component behavior

## Theming

Components support Actual's theming system with tokens and theme utilities:

- `theme` - Theme configuration
- `tokens` - Design tokens
- `styles` - Shared styling utilities

## Usage

Components are designed to be imported individually to support tree-shaking:

```typescript
import { Button } from '@actual-app/components/button';
import { Input } from '@actual-app/components/input';
import { Stack } from '@actual-app/components/stack';
```

## Development

This package is part of the Actual Budget monorepo. See the main repository README for development setup instructions.

### Testing

Run tests with:

```bash
yarn test
```

## License

MIT

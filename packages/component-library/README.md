# @actual-app/components

A React component library for the Actual Budget application, built with React Aria Components and Emotion CSS.

## Overview

This package provides reusable UI components that are used throughout the Actual Budget application. The components are built using modern React patterns and accessibility best practices through React Aria Components.

## Features

- **Accessible**: Built on top of React Aria Components for excellent accessibility
- **Theming**: Consistent theming system with design tokens
- **TypeScript**: Full TypeScript support with proper type definitions
- **Icons**: Multiple icon sets (v0, v1, v2) and animated loading components
- **Modular**: Tree-shakeable exports for optimal bundle size

## Installation

This package is part of the Actual Budget monorepo and is not published separately. It's used internally by other packages within the project.

## Available Components

### Layout Components
- `Block` - Basic block container
- `Card` - Card container with styling
- `Stack` - Vertical layout container
- `SpaceBetween` - Flex container with space-between layout
- `View` - Generic view container

### Form Components
- `Button` - Button component with multiple variants
- `Input` - Text input component
- `Select` - Dropdown select component
- `Toggle` - Toggle/switch component
- `Label` - Form label component
- `FormError` - Error message component
- `InlineField` - Inline form field wrapper

### UI Components
- `Menu` - Menu/dropdown component
- `Popover` - Popover container
- `Tooltip` - Tooltip component
- `Text` - Text component with typography support
- `TextOneLine` - Single-line text with ellipsis
- `AlignedText` - Text with alignment options
- `Paragraph` - Paragraph text component

### Utility Components
- `InitialFocus` - Focus management utility
- `AnimatedLoading` - Animated loading spinner
- `Loading` - Static loading component

### Icons
- Logo icons
- Icon sets v0, v1, v2
- Loading animations

## Usage

```tsx
import { Button } from '@actual-app/components/button';
import { Input } from '@actual-app/components/input';
import { Stack } from '@actual-app/components/stack';

function MyForm() {
  return (
    <Stack spacing={3}>
      <Input placeholder="Enter your name" />
      <Button variant="primary">Submit</Button>
    </Stack>
  );
}
```

## Development

### Testing

Run the component tests:

```bash
npm run test
```

### Icon Generation

Generate icons from SVG files:

```bash
npm run generate:icons
```

## Dependencies

- **React**: ^18.2 (peer dependency)
- **React DOM**: ^18.2 (peer dependency)
- **React Aria Components**: For accessibility
- **Emotion CSS**: For styling
- **usehooks-ts**: For React hooks utilities

## Contributing

This component library follows the overall contributing guidelines of the Actual Budget project. See the main [CONTRIBUTING.md](../../CONTRIBUTING.md) for details.
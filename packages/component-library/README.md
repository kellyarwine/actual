# `@actual-app/components`

This package provides the core React component library for Actual Budget's user interface. It contains reusable UI components built with React Aria Components for accessibility.

## Installation

```bash
npm install @actual-app/components
```

## Peer Dependencies

This package requires React 18.2 or higher:

```bash
npm install react react-dom
```

## Components

The library includes foundational UI components:

- **Layout**: `View`, `Block`, `Stack`, `SpaceBetween`, `Card`
- **Typography**: `Text`, `TextOneLine`, `Paragraph`, `AlignedText`, `Label`
- **Forms**: `Input`, `InlineField`, `Select`, `Toggle`, `FormError`
- **Interactive**: `Button`, `Menu`, `Popover`, `Tooltip`
- **Icons**: SVG icon components

## Features

- **Accessibility-first** - Built with React Aria Components for full ARIA support
- **Consistent theming** - Centralized design tokens and styling
- **TypeScript** - Full type definitions included
- **Responsive** - Components adapt to different screen sizes

## Usage

```tsx
import { Button, Text, Stack } from '@actual-app/components';

function MyComponent() {
  return (
    <Stack spacing={2}>
      <Text>Welcome to Actual Budget</Text>
      <Button variant="primary">Get Started</Button>
    </Stack>
  );
}
```

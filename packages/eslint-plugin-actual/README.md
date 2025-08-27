# `eslint-plugin-actual`

This package contains custom ESLint rules specific to the Actual Budget codebase. It enforces coding standards and best practices across the project.

## Overview

The ESLint plugin provides custom rules that help maintain:

- **Code consistency** across the monorepo
- **Performance best practices** for React components
- **Security guidelines** for financial data handling
- **API usage patterns** for internal libraries

## Installation

This plugin is used internally within the Actual project and is configured in the root ESLint configuration.

```bash
# Install as dev dependency (already included in the monorepo)
yarn add --dev eslint-plugin-actual
```

## Configuration

The plugin is automatically configured in the project's ESLint setup:

```javascript
// eslint.config.mjs
{
  plugins: {
    'actual': require('eslint-plugin-actual'),
  },
  rules: {
    // Custom Actual rules are applied here
  }
}
```

## Custom Rules

The plugin includes rules specific to Actual's architecture and requirements:

- Component composition patterns
- Data access patterns
- Security considerations for financial data
- Performance optimizations

## Development

### Testing Rules

```bash
yarn test
```

### Adding New Rules

Rules are implemented in the `lib/` directory following ESLint's rule development guidelines. Each rule includes:

- Rule implementation
- Documentation
- Test cases
- Type definitions

## Dependencies

- ESLint 7+ (peer dependency)
- Node.js testing utilities

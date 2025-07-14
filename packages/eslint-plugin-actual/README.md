# `eslint-plugin-actual`

This package provides custom ESLint rules specific to the Actual Budget codebase. It helps maintain code quality and consistency across the project.

## What it provides

The plugin includes custom ESLint rules tailored for Actual's development practices and patterns. These rules help:

- **Enforce coding standards** - Maintain consistent code style across the monorepo
- **Prevent common mistakes** - Catch potential issues specific to Actual's architecture
- **Improve code quality** - Promote best practices for React, TypeScript, and Node.js development

## Usage

This plugin is already configured in the project's ESLint setup. It's automatically applied when running:

```bash
yarn lint
```

## Development

To work on the plugin rules:

```bash
# Run tests
yarn workspace eslint-plugin-actual test

# Test against the actual codebase
yarn lint
```

## Rule Implementation

Rules are implemented in `lib/rules/` and follow ESLint's rule API. Each rule includes:

- Rule implementation with AST traversal
- Configuration options and settings
- Test cases covering various scenarios
- Documentation explaining the rule's purpose

_Note: This is an internal plugin for the Actual Budget project and is not intended for external use._

# eslint-plugin-actual

A custom ESLint plugin containing project-specific linting rules for the Actual Budget codebase. This plugin enforces coding standards and best practices specific to the Actual project.

## Overview

This ESLint plugin provides:

- **Custom rules** tailored to Actual Budget's codebase
- **Project-specific** coding standards enforcement
- **Consistent code quality** across the monorepo
- **Developer productivity** through automated code review

## Installation

This plugin is used internally within the Actual Budget monorepo and is not published to npm. It's automatically available when developing within the project.

## Usage

The plugin is configured in the project's ESLint configuration (`eslint.config.mjs`). Rules are automatically applied when running:

```bash
# Lint the entire project
yarn lint

# Lint and fix issues
yarn lint:fix

# Lint specific files
eslint src/component.ts
```

## Custom Rules

> **Note**: Specific rules documentation would be added here as they are developed. The plugin structure is set up to support project-specific linting needs.

This plugin is designed to enforce:

- **Import conventions** specific to the monorepo structure
- **Code organization** patterns used in Actual
- **API usage** guidelines for internal packages
- **Performance** best practices for the application
- **Accessibility** requirements for UI components

## Development

### Adding New Rules

1. **Create rule file** in `lib/rules/`:
   ```javascript
   // lib/rules/my-rule.js
   module.exports = {
     meta: {
       type: 'problem',
       docs: {
         description: 'Description of the rule',
         category: 'Best Practices',
         recommended: true
       },
       schema: [] // JSON schema for rule options
     },
     create(context) {
       return {
         // AST visitor methods
       }
     }
   }
   ```

2. **Export rule** in `lib/index.js`:
   ```javascript
   module.exports = {
     rules: {
       'my-rule': require('./rules/my-rule')
     }
   }
   ```

3. **Add to configuration** in project ESLint config:
   ```javascript
   {
     rules: {
       'actual/my-rule': 'error'
     }
   }
   ```

### Testing Rules

```bash
# Run plugin tests
yarn test
```

The plugin uses `eslint-vitest-rule-tester` for testing individual rules:

```javascript
// tests/my-rule.test.js
import { RuleTester } from 'eslint-vitest-rule-tester'
import rule from '../lib/rules/my-rule'

const ruleTester = new RuleTester()

ruleTester.run('my-rule', rule, {
  valid: [
    // Valid code examples
    'const validCode = true'
  ],
  invalid: [
    // Invalid code examples with expected errors
    {
      code: 'const invalidCode = false',
      errors: [{ message: 'Expected error message' }]
    }
  ]
})
```

## Rule Categories

### Import/Export Rules
- Enforce proper import paths within monorepo
- Validate cross-package dependencies
- Ensure consistent export patterns

### Performance Rules
- Detect expensive operations in render paths
- Validate database query patterns
- Enforce efficient data structures

### Architecture Rules
- Maintain separation of concerns
- Enforce layered architecture
- Validate component composition patterns

### Accessibility Rules
- Ensure proper ARIA usage
- Validate semantic HTML
- Enforce keyboard navigation support

## Configuration

The plugin is configured in the main ESLint configuration:

```javascript
// eslint.config.mjs
export default [
  {
    plugins: {
      actual: require('eslint-plugin-actual')
    },
    rules: {
      // Plugin rules configuration
      'actual/rule-name': 'error'
    }
  }
]
```

## Dependencies

- **requireindex** - Dynamic rule loading
- **ESLint 9+** - Linting framework
- **eslint-vitest-rule-tester** - Rule testing utilities

## Technologies

- **JavaScript** - Rule implementation language
- **ESLint AST** - Abstract syntax tree manipulation
- **Vitest** - Testing framework

## Integration

This plugin is used by:
- Root project ESLint configuration
- CI/CD pipeline for code quality checks
- Pre-commit hooks via Husky
- Development workflow in all packages

## Contributing

When adding new rules:

1. **Identify the pattern** that needs enforcement
2. **Write tests first** with valid/invalid examples
3. **Implement the rule** using ESLint's AST API
4. **Document the rule** with clear examples
5. **Add to project configuration** if recommended

For more information about the overall project structure, see the main [README](../../README.md).
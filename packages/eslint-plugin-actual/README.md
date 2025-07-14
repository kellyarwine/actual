# eslint-plugin-actual

Custom ESLint plugin for the Actual Budget project, providing specialized linting rules for better code quality and consistency.

## Overview

This ESLint plugin contains custom rules specifically designed for the Actual Budget codebase. These rules help maintain code quality, consistency, and follow project-specific conventions that aren't covered by standard ESLint rules.

## Installation

This plugin is used internally within the Actual Budget monorepo and is not published separately. It's configured in the main ESLint configuration.

## Rules

### `prefer-if-statement`

**Type**: Suggestion  
**Fixable**: Yes (with `--fix`)

Detects usage of logical or ternary expressions at the statement level and suggests using if statements or optional chaining instead for better readability.

#### Rule Details

This rule helps improve code readability by discouraging the use of logical operators (`&&`, `||`) and ternary operators (`? :`) at the top level of statements.

❌ **Incorrect code:**
```javascript
// Logical AND at statement level
condition && doSomething();

// Logical OR at statement level  
value || setValue(defaultValue);

// Ternary at statement level
isTrue ? doSomething() : doSomethingElse();
```

✅ **Correct code:**
```javascript
// Use if statements instead
if (condition) {
  doSomething();
}

// Use optional chaining when appropriate
value?.doSomething();

// Use if-else for complex logic
if (isTrue) {
  doSomething();
} else {
  doSomethingElse();
}
```

### `typography`

**Type**: Suggestion  
**Fixable**: No

Detects usage of straight quotes in potentially user-visible locations and suggests using curly quotes for better typography.

#### Rule Details

This rule helps maintain consistent typography in user-facing text by encouraging the use of proper curly quotes instead of straight quotes.

❌ **Incorrect code:**
```javascript
const message = "Don't use straight quotes in user text";
const title = 'User\'s Guide';
```

✅ **Correct code:**
```javascript
const message = "Don't use straight quotes in user text";
const title = 'User's Guide';
```

## Configuration

The plugin is automatically configured in the main ESLint configuration file. If you need to customize the rules, you can adjust them in `eslint.config.mjs`:

```javascript
import actualPlugin from './packages/eslint-plugin-actual';

export default [
  {
    plugins: {
      actual: actualPlugin,
    },
    rules: {
      'actual/prefer-if-statement': 'warn',
      'actual/typography': 'warn',
    },
  },
];
```

## Development

### Testing

Run the rule tests:

```bash
npm run test
```

Tests are located in the `lib/rules/__tests__/` directory and use the ESLint testing utilities.

### Adding New Rules

1. Create a new rule file in `lib/rules/`
2. Implement the rule following ESLint's rule structure
3. Add tests in `lib/rules/__tests__/`
4. Export the rule from the main plugin file
5. Update this README with documentation

### Rule Structure

Each rule should follow this structure:

```javascript
module.exports = {
  meta: {
    type: 'suggestion', // or 'problem' or 'layout'
    docs: {
      description: 'Description of what the rule does',
    },
    fixable: 'code', // or null if not fixable
    schema: [], // JSON schema for rule options
    messages: {
      messageId: 'Error message template',
    },
  },
  create(context) {
    return {
      // AST node visitors
    };
  },
};
```

## Dependencies

### Runtime Dependencies
- `requireindex`: For loading rule modules

### Development Dependencies
- `eslint`: ESLint core (peer dependency)
- `eslint-plugin-eslint-plugin`: Meta-linting for ESLint plugins
- `eslint-vitest-rule-tester`: Testing utilities for ESLint rules
- `vitest`: Test runner

## Contributing

When contributing new rules:

1. **Focus on Actual-specific needs**: Rules should address patterns specific to the Actual Budget codebase
2. **Provide clear documentation**: Include examples of incorrect and correct code
3. **Add comprehensive tests**: Test edge cases and ensure rules work correctly
4. **Consider performance**: Avoid expensive operations in rule implementations
5. **Follow ESLint conventions**: Use established patterns from the ESLint ecosystem

See the main [CONTRIBUTING.md](../../CONTRIBUTING.md) for general contribution guidelines.

## Resources

- [ESLint Rule Development Guide](https://eslint.org/docs/developer-guide/working-with-rules)
- [ESLint Rule Testing](https://eslint.org/docs/developer-guide/nodejs-api#ruletester)
- [AST Explorer](https://astexplorer.net/) - For understanding JavaScript AST structure
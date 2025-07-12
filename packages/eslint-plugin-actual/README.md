# eslint-plugin-actual

A custom ESLint plugin for the Actual Budget project, providing specialized linting rules to maintain code quality and consistency across the codebase.

## Overview

This ESLint plugin contains custom rules specifically designed for the Actual Budget project. It helps enforce coding standards and best practices that are particular to the Actual codebase.

## Rules

### prefer-if-statement

Detects usage of logical or ternary expressions at the statement level and suggests using if statements or optional chaining instead.

**Why this rule?**

- Improves code readability and maintainability
- Reduces potential for bugs in complex logical expressions
- Encourages more explicit control flow

**Examples:**

❌ Incorrect:

```javascript
// Logical expressions at statement level
condition && doSomething();
obj.prop && obj.prop.method();

// Ternary at statement level
condition ? actionA() : actionB();
```

✅ Correct:

```javascript
// Using if statements
if (condition) {
  doSomething();
}

// Using optional chaining
obj.prop?.method();

// Ternary for assignment is fine
const value = condition ? valueA : valueB;
```

### typography

Detects usage of straight quotes in potentially user-visible locations and suggests using curly quotes instead.

**Why this rule?**

- Improves typography and visual presentation
- Ensures consistent use of proper typographic quotes
- Enhances the professional appearance of user-facing text

**Examples:**

❌ Incorrect:

```javascript
const message = "Don't use straight quotes in UI text";
const error = 'User "admin" not found';
```

✅ Correct:

```javascript
const message = "Don't use straight quotes in UI text";
const error = 'User "admin" not found';
```

## Installation

This plugin is only intended for use within the Actual Budget project and is not published to npm. It's automatically available when working on the Actual codebase.

## Configuration

The plugin is automatically configured in the main ESLint configuration file (`eslint.config.mjs`) in the repository root.

## Development

### Adding New Rules

1. Create a new rule file in `lib/rules/`
2. Export the rule module with proper metadata
3. Add tests in `lib/rules/__tests__/`
4. Update the main plugin index to include the new rule

### Testing

Run the plugin tests:

```bash
yarn test
```

The tests use ESLint's built-in rule tester to validate rule behavior across various code scenarios.

## Rule Development Guidelines

When creating new rules for this plugin:

1. **Be specific to Actual**: Rules should address patterns specific to the Actual codebase
2. **Provide clear messages**: Error messages should explain why the pattern is problematic
3. **Include fixers when possible**: Provide automatic fixes where feasible
4. **Add comprehensive tests**: Cover both valid and invalid cases
5. **Document the reasoning**: Explain why the rule is needed in the description

## License

MIT - See the main repository LICENSE file for details.

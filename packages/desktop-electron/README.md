# `desktop-electron`

This package contains the Electron wrapper for Actual Budget, providing the desktop application experience on Windows, macOS, and Linux.

## What it does

The desktop-electron package wraps the Actual web application in an Electron shell, providing:

- **Native desktop experience** - Window management, system tray integration, and OS-specific behaviors
- **File system access** - Local file operations and data storage
- **Offline capabilities** - Full functionality without internet connection
- **Security** - Content Security Policy and secure communication between main and renderer processes
- **Auto-updates** - Built-in update mechanisms for seamless user experience

## Development

### Prerequisites

- Node.js v18 or higher
- Yarn package manager

### Getting started

From the root of the project:

```bash
# Install dependencies
yarn install

# Start development mode
yarn start:desktop
```

This will:

1. Build the core application (loot-core)
2. Start the desktop client in watch mode
3. Launch Electron with hot reload

### Building

```bash
# Build for distribution
yarn workspace desktop-electron build
```

## E2E Testing

The package includes Playwright tests for end-to-end testing:

```bash
yarn workspace desktop-electron e2e
```

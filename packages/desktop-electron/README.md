# desktop-electron

The Electron desktop application wrapper for Actual Budget.

## Overview

This package provides the Electron-based desktop application for Actual Budget, enabling users to run Actual as a native desktop application on Windows, macOS, and Linux. It wraps the web application in an Electron container with additional desktop-specific features and integrations.

## Features

- **Cross-platform**: Builds for Windows, macOS, and Linux
- **Native desktop integration**: System menus, window management, and OS-specific features
- **Local data storage**: Uses SQLite for local data persistence
- **Auto-updater**: Built-in update mechanism
- **Security**: Sandboxed execution with secure communication between main and renderer processes

## Supported Platforms

### macOS
- **Formats**: DMG installer
- **Architectures**: x64 (Intel), arm64 (Apple Silicon)
- **Requirements**: macOS 10.14 or later
- **Features**: Code signing, notarization, and app store compliance

### Windows
- **Formats**: NSIS installer, Microsoft Store (AppX)
- **Architectures**: ia32, x64, arm64
- **Requirements**: Windows 10 or later
- **Features**: Code signing and Microsoft Store compatibility

### Linux
- **Formats**: AppImage, Flatpak
- **Architectures**: x64, arm64
- **Requirements**: Most modern Linux distributions
- **Features**: Flatpak sandboxing and system integration

## Development

### Prerequisites

- Node.js 20 or later
- Yarn 4.9.1 or later
- Platform-specific build tools

### Setup

Install dependencies and build the application:

```bash
# Install dependencies
yarn install

# Build for development
yarn start:desktop
```

### Building

Build the desktop application:

```bash
# Build distribution files
yarn build:desktop

# Build for specific platform
yarn build:desktop --mac
yarn build:desktop --win
yarn build:desktop --linux
```

### Development Scripts

- `yarn watch` - Start development server with hot reloading
- `yarn build:dist` - Build TypeScript sources
- `yarn clean` - Clean build artifacts
- `yarn e2e` - Run end-to-end tests

## Architecture

### Main Process (`index.ts`)
- Application lifecycle management
- Window creation and management
- Menu setup and handling
- Security policy enforcement

### Renderer Process
- Web application content (from `@actual-app/web`)
- User interface and interactions
- Isolated from main process for security

### Preload Script (`preload.ts`)
- Secure communication bridge between main and renderer
- Exposes safe APIs to the web application
- Maintains security boundaries

### Window State Management (`window-state.ts`)
- Persistent window positioning and sizing
- Multi-monitor support
- Window restoration on app restart

## Security

The desktop application implements several security measures:

- **Process isolation**: Main and renderer processes are isolated
- **Context isolation**: Preload scripts run in isolated contexts
- **Sandboxing**: Renderer process runs in a sandbox
- **CSP**: Content Security Policy for additional protection
- **Node integration disabled**: Direct Node.js access is disabled in renderer

## Configuration

### Build Configuration

The build process is configured in `package.json` under the `build` section:

- **App ID**: `com.actualbudget.actual`
- **Product Name**: Actual
- **File inclusion/exclusion patterns**
- **Platform-specific settings**
- **Code signing configuration**

### Environment Variables

- `ACTUAL_DOCUMENT_DIR`: Directory for document storage
- `ACTUAL_DATA_DIR`: Directory for application data
- `NODE_ENV`: Environment mode (development/production)

## Testing

End-to-end tests are written using Playwright:

```bash
yarn e2e
```

Tests are located in the `e2e/` directory and cover:
- Application startup and shutdown
- Menu interactions
- File operations
- Cross-platform compatibility

## Dependencies

### Production Dependencies
- `@actual-app/sync-server`: Server functionality
- `better-sqlite3`: SQLite database integration
- `fs-extra`: Enhanced file system operations
- `promise-retry`: Retry logic for async operations

### Development Dependencies
- `electron`: Electron framework
- `electron-builder`: Application packaging and distribution
- `@playwright/test`: End-to-end testing
- `typescript`: TypeScript compilation

## Contributing

When contributing to the desktop application:

1. Test on multiple platforms when possible
2. Follow Electron security best practices
3. Ensure proper error handling for file operations
4. Test installer/packaging changes thoroughly
5. Update end-to-end tests for new features

See the main [CONTRIBUTING.md](../../CONTRIBUTING.md) for general contribution guidelines.
# `loot-core`

This package contains the core application logic for Actual. It runs on any platform and provides the foundational functionality for personal finance management.

## What it does

loot-core is the heart of Actual Budget. It handles:

- **Budget calculations and rules** - Core budgeting logic and envelope budgeting implementation
- **Account management** - Transaction processing, account balancing, and reconciliation
- **Data persistence** - SQLite database management and migrations
- **Synchronization** - CRDT-based sync logic for multi-device support
- **Import/Export** - File format support for importing from other budgeting tools
- **API layer** - Server-side API endpoints and business logic

## Architecture

The package is structured into several key areas:

- `src/server/` - Server-side logic and API endpoints
- `src/shared/` - Shared utilities and business logic
- `src/platform/` - Platform-specific implementations
- `src/mocks/` - Testing utilities and mock data
- `src/types/` - TypeScript type definitions

## Build targets

This package builds for multiple environments:

- **Node.js** - For the sync server and desktop Electron app
- **Browser** - For the web application
- **API** - For standalone API usage

Use the npm scripts in package.json to build for specific targets.

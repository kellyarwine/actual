# `loot-core`

This package contains the core business logic and data layer for Actual Budget. It provides the foundation that powers all Actual applications across different platforms.

## Overview

Loot-core is the heart of Actual Budget, providing:

- **Financial calculations** and budgeting logic
- **Data persistence** and synchronization
- **Import/export functionality** for various financial formats
- **Rules engine** for automated transaction categorization
- **Report generation** and analysis tools
- **Cross-platform compatibility** (web, desktop, mobile)

## Architecture

### Key Components

- **Client Layer**: React hooks, queries, and state management
- **Server Layer**: Data processing and storage
- **Shared Utilities**: Common functionality across platforms
- **Platform Adapters**: Environment-specific implementations
- **Type Definitions**: TypeScript interfaces and models

### Data Flow

1. **Client** makes requests through query system
2. **Platform Layer** handles environment-specific operations
3. **Server Layer** processes business logic
4. **Database** persists data with SQLite
5. **Sync Engine** handles multi-device synchronization

## Usage

Loot-core is consumed by other packages in the monorepo:

```typescript
// Client-side usage
import { useAccounts } from 'loot-core/client/queries';
import { send } from 'loot-core/platform/client/fetch';

// Server-side usage
import { runQuery } from 'loot-core/server/db';
import { validateSchema } from 'loot-core/shared/util';
```

## Development

### Building

```bash
# Build for browser
yarn build:browser

# Build for Node.js/Electron
yarn build:node

# Watch mode for development
yarn watch:browser
yarn watch:node
```

### Testing

```bash
# Run all tests
yarn test

# Test specific environments
yarn test:node
yarn test:web
```

## Features

### Financial Management

- **Envelope budgeting** with category allocation
- **Transaction tracking** with automatic categorization
- **Account reconciliation** and balance tracking
- **Scheduled transactions** and recurring payments

### Data Handling

- **Multi-format imports** (CSV, OFX, QIF)
- **Bank synchronization** via integrations
- **Backup and restore** functionality
- **Real-time sync** across devices

### Reporting

- **Spending analysis** and trends
- **Budget performance** tracking
- **Custom date ranges** and filtering
- **Export capabilities** for external analysis

## Platform Support

Loot-core runs on:

- **Web browsers** via WebAssembly
- **Desktop applications** via Electron
- **Node.js servers** for data processing
- **Mobile devices** (future support)

## Dependencies

- **SQLite**: Database engine (via sql.js for web, better-sqlite3 for Node)
- **Date handling**: date-fns for temporal operations
- **CSV processing**: csv-parse/csv-stringify for imports/exports
- **Crypto**: Built-in encryption for sensitive data
- **Redux Toolkit**: State management patterns

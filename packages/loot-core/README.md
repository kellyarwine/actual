# loot-core

The core application library for Actual Budget. This package contains the business logic, data management, and platform-agnostic functionality that powers all Actual Budget applications.

## Overview

loot-core is the heart of Actual Budget, providing:

- **Data persistence** with SQLite database management
- **Business logic** for budgeting, accounts, and transaction management  
- **Platform abstraction** for running on web, desktop, and mobile
- **Synchronization** capabilities for multi-device usage
- **Import/export** functionality for various financial formats
- **Query engine** for flexible data retrieval and manipulation
- **Rule engine** for automated transaction categorization

## Architecture

### Core Modules

#### `/src/server`
Server-side functionality and business logic:

- **`main.ts`** - Main application entry point and handler registration
- **`accounts/`** - Account management and bank connections
- **`budget/`** - Budgeting logic and calculations
- **`transactions/`** - Transaction processing and management
- **`rules/`** - Automated rule processing for transactions
- **`schedules/`** - Recurring transaction scheduling
- **`sync/`** - Multi-device synchronization
- **`importers/`** - File import handlers (OFX, QIF, CSV, etc.)
- **`reports/`** - Financial reporting and analytics
- **`db/`** - Database schema and migrations

#### `/src/shared`
Shared utilities and business logic used by both client and server:

- **`query.ts`** - Query building and data filtering
- **`transactions.ts`** - Transaction utilities and helpers
- **`months.ts`** - Date and month manipulation
- **`arithmetic.ts`** - Financial calculations with precision
- **`schedules.ts`** - Schedule processing logic
- **`rules.ts`** - Rule matching and application
- **`util.ts`** - Common utility functions

#### `/src/platform`
Platform-specific abstractions for different environments:

- **`server/`** - Server platform implementations
  - `sqlite/` - Database access layer
  - `fs/` - File system operations  
  - `fetch/` - Network requests
  - `asyncStorage/` - Persistent storage
- **`client/`** - Client platform implementations

#### `/src/types`
TypeScript type definitions for the entire application:

- **`models/`** - Data model interfaces
- **`handlers.d.ts`** - Handler function signatures
- **API types** and interfaces

#### `/src/mocks`
Mock implementations for testing and development.

## Features

### Financial Data Management
- **Multi-account support** with various account types
- **Transaction import** from banks and financial institutions
- **Manual transaction entry** with rich categorization
- **Transfer handling** between accounts
- **Split transactions** for complex entries

### Budgeting System
- **Envelope budgeting** methodology
- **Category management** with hierarchical organization
- **Budget templates** for recurring budget setups
- **Goal tracking** and progress monitoring
- **Historical budget analysis**

### Automation & Rules
- **Automatic categorization** based on payee, amount, and description patterns
- **Recurring transaction scheduling** with flexible patterns
- **Rule-based transaction processing** for consistent categorization
- **Payee management** with automatic matching

### Data Import/Export
- **OFX (Open Financial Exchange)** import
- **QIF (Quicken Interchange Format)** import
- **CSV import** with flexible mapping
- **Bank-specific importers** for major financial institutions
- **Data export** for backup and migration

### Synchronization
- **End-to-end encryption** for secure data sync
- **Conflict resolution** for concurrent edits
- **Offline-first design** with eventual consistency
- **Multi-device support** with real-time updates

## Development

### Build Scripts

```bash
# Build for Node.js (desktop)
npm run build:node

# Build for browser
npm run build:browser  

# Build API documentation
npm run build:api

# Watch mode for development
npm run watch:node
npm run watch:browser
```

### Testing

```bash
# Run all tests
npm run test

# Run Node.js tests only
npm run test:node

# Run browser tests only  
npm run test:web
```

### Internationalization

```bash
# Generate i18n files
npm run generate:i18n
```

## Platform Support

### Node.js Environment
- **Electron desktop apps** - Full SQLite database access
- **Server deployments** - Sync server functionality
- **Command-line tools** - Data processing and migration

### Browser Environment  
- **Web applications** - Uses sql.js for in-browser SQLite
- **Progressive Web Apps** - Offline functionality with service workers
- **Mobile web** - Responsive design and touch support

## Database

loot-core uses SQLite as its primary database engine with different implementations per platform:

- **Desktop**: Native SQLite via better-sqlite3
- **Web**: sql.js (SQLite compiled to WebAssembly)
- **Migrations**: Automatic schema upgrades with backward compatibility

### Key Tables
- `accounts` - Bank accounts and account metadata
- `transactions` - Financial transactions and transfers
- `categories` - Budget categories and groups
- `payees` - Transaction payees and merchants
- `rules` - Automation rules for transaction processing
- `schedules` - Recurring transaction schedules

## API Integration

loot-core provides APIs for:

- **Account management** - Create, update, and manage accounts
- **Transaction processing** - Add, edit, and categorize transactions
- **Budget operations** - Set up and manage budgets
- **Data import/export** - Import from various financial sources
- **Synchronization** - Multi-device data sync

## Dependencies

### Core Dependencies
- **better-sqlite3** - SQLite database for Node.js
- **@jlongster/sql.js** - SQLite for browser environments
- **date-fns** - Date manipulation and formatting
- **uuid** - Unique identifier generation
- **csv-parse/csv-stringify** - CSV file processing

### Financial Processing
- **adm-zip** - Archive handling for bank imports
- **handlebars** - Template processing for reports
- **md5** - Checksums for data integrity

### Development Dependencies
- **vitest** - Testing framework
- **webpack** - Module bundling
- **typescript** - Type checking and compilation

## Contributing

When contributing to loot-core:

1. **Understand the architecture** - This is the core of the application
2. **Write tests** - Both unit tests and integration tests are important
3. **Consider platform differences** - Code may run in Node.js and browsers
4. **Handle data migrations** - Database changes need migration scripts
5. **Maintain API compatibility** - Changes may affect dependent packages

See the main [CONTRIBUTING.md](../../CONTRIBUTING.md) for general contribution guidelines.

## Security

loot-core handles sensitive financial data and implements several security measures:

- **Encryption at rest** - Database files can be encrypted
- **Secure transport** - All network communication uses HTTPS
- **Input validation** - All user inputs are validated and sanitized
- **SQL injection protection** - Parameterized queries prevent injection attacks
- **Access control** - APIs require proper authentication
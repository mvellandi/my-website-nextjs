# Tidewave MCP Integration

## Overview

This project has Tidewave installed for both visual testing (via Tidewave Web/Desktop app) and code intelligence (via Tidewave MCP server).

## Two Tidewave Interfaces

### 1. Tidewave Web/Desktop App
**Purpose**: Visual testing and inspection
**Access**: http://localhost:9832 (when running)
**Features**:
- Visual regression testing
- DOM inspection
- Screenshot comparison
- AI-powered visual feedback
- Full-featured visual testing UI

### 2. Tidewave MCP Server
**Purpose**: Code intelligence tools for Claude Code
**Access**: Automatically available in Claude Code via MCP
**Features**: Limited to code analysis (no visual testing)

## Tidewave MCP Tools

The Tidewave MCP server provides three code intelligence tools accessible to Claude Code:

### `get_docs`
Extract TypeScript/JavaScript documentation and type information.

**Capabilities:**
- Get type signatures for functions, classes, methods
- Extract JSDoc comments and documentation
- Works for project files, npm dependencies, and Node.js builtins

**Example usage:**
```typescript
// Get React useState documentation
get_docs("react:useState")

// Get local component types
get_docs("components/main/Hero:Hero")

// Get method signatures
get_docs("@sanity/client:SanityClient#fetch")
```

**Returns:**
- Function/class signatures
- JSDoc documentation
- Type definitions
- Links to source documentation

### `get_source_location`
Find exact file path and line number where a symbol is defined.

**Capabilities:**
- Navigate to symbol definitions
- Works for local files and dependencies
- Returns precise file:line:column location

**Example usage:**
```typescript
// Find where getStaticProps is defined
get_source_location("pages/index.tsx:getStaticProps")
// Returns: pages/index.tsx:30:14(typescript)
```

**Returns:**
- Absolute file path
- Line and column number
- Language type

### `project_eval`
Execute JavaScript/TypeScript code in the project's Node.js context.

**Capabilities:**
- Run code with access to project files
- Use dynamic imports for Node.js modules
- Execute quick checks and data extraction
- Return JSON or string results

**Example usage:**
```typescript
// Read package.json dependencies
project_eval({
  code: `
    const fs = await import('node:fs/promises');
    const pkg = JSON.parse(await fs.readFile('package.json', 'utf-8'));
    return Object.keys(pkg.dependencies);
  `,
  json: true
})
```

**Options:**
- `code` (required): JavaScript/TypeScript code to execute
- `arguments`: Array of arguments available in code
- `timeout`: Max execution time in ms (default: 30000)
- `json`: Return result as JSON (default: false)

**Returns:**
- `success`: boolean
- `result`: Execution result
- `stdout`: Console output
- `stderr`: Error output

## Setup

### Project Integration

**Files created:**
- `pages/api/tidewave.ts` - API handler for Tidewave endpoint (development only)
- `middleware.ts` - Routes `/tidewave/*` requests to API handler
- `instrumentation.ts` - Logging hook for Tidewave

**Dependencies installed:**
- `tidewave` (dev)
- `@opentelemetry/sdk-node`
- `@opentelemetry/sdk-trace-base` (dev)
- `@opentelemetry/sdk-logs` (dev)

**Configuration changes:**
- `tsconfig.json`: Updated `moduleResolution` to `bundler` for compatibility

### Global MCP Configuration

Tidewave MCP server is configured in `~/.claude.json`:

```json
{
  "mcpServers": {
    "tidewave": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "tidewave", "mcp"],
      "env": {
        "TIDEWAVE_URL": "http://localhost:9832"
      }
    }
  }
}
```

### Tidewave App Settings

In Tidewave desktop app settings:
- ✅ Connect to Claude Code
- ❌ **Disable** "Automatically include Tidewave MCP" (we configured it manually)
- Set Editor to VSCode for file off-ramps

## Usage Workflow

### For Code Intelligence
Use Tidewave MCP tools directly in Claude Code conversations:
- Get type information while writing code
- Navigate to definitions
- Run quick Node.js scripts

### For Visual Testing
Use Tidewave Web/Desktop app:
1. Start dev server: `npm run dev`
2. Open Tidewave app at http://localhost:9832
3. Connect to http://localhost:3000
4. Use visual testing features in Tidewave UI
5. Click files in Tidewave to open in VSCode

### Combined Workflow
- **VSCode + Claude Code**: Primary coding interface
- **Tidewave MCP**: Code intelligence tools (automatic)
- **Tidewave App**: Visual testing and inspection (manual)
- **Puppeteer MCP**: Screenshots for Claude (automatic)

## What Tidewave MCP Does NOT Do

The MCP server provides **code intelligence only**, not visual testing:

❌ Cannot capture screenshots
❌ Cannot inspect DOM
❌ Cannot compare visual diffs
❌ Cannot interact with browser UI

For visual testing, use:
- Tidewave Web/Desktop app (manual inspection)
- Puppeteer MCP (automated screenshots for Claude)

## Development Server

The Tidewave endpoint is available only in development mode:

```bash
npm run dev
# Tidewave endpoint: http://localhost:3000/tidewave
```

In production, the `/tidewave` endpoint returns 404.

## References

- [Tidewave Documentation](https://hexdocs.pm/tidewave)
- [Tidewave + Claude Code Guide](https://hexdocs.pm/tidewave/claude_code.html)
- [Agent Client Protocol](https://agentclientprotocol.com/overview/introduction)

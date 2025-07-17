# Sleep MCP Server

A Model Context Protocol (MCP) server that provides a simple sleep tool for LLMs to wait for specified durations. Built with FastMCP framework.

## Features

- **Sleep Tool**: Allows LLMs to pause execution for a specified number of seconds (0-300 seconds)
- **FastMCP Framework**: Built using the modern FastMCP TypeScript framework
- **Easy to Use**: Install and run with npx
- **TypeScript**: Built with TypeScript for type safety
- **MCP Compatible**: Works with any MCP-compatible client

## Installation

### Global Installation
```bash
npm install -g sleep-mcp
```

### Direct Usage with npx
```bash
npx sleep-mcp
```

## Usage

### As an MCP Server

The server runs on stdio and can be integrated with MCP-compatible applications:

```bash
npx sleep-mcp
```

### Tool Specification

The server provides one tool:

#### `sleep`
- **Description**: Wait for a specified number of seconds
- **Parameters**:
  - `seconds` (number, required): Number of seconds to sleep (0-300)

## Example Integration

Configure in your MCP client settings:

```json
{
  "mcpServers": {
    "sleep": {
      "command": "npx",
      "args": ["sleep-mcp"]
    }
  }
}
```

## Development

### Setup
```bash
git clone <repository-url>
cd sleep-mcp-server
npm install
```

### Build
```bash
npm run build
```

### Development Mode
```bash
npm run dev
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
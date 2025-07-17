# Sleep MCP Server 2.0

A MCP server that provides a simple sleep tool for LLMs to wait for specified durations, such as waiting for an API response or for new data to become available.

## Available Tools

#### `sleep` : Waits for a given number of seconds.

## Installation
Configure in your MCP client settings:

```json
{
  "mcpServers": {
    "sleep": {
      "command": "npx",
      "args": ["-y", "sleep-mcp"]
    }
  }
}
```

## Development
### Setup
```bash
git clone https://github.com/erichung9060/sleep-mcp-2.0
cd sleep-mcp-2.0
npm install
```

### Run
```bash
npm start
```

### Build
```bash
npm run build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
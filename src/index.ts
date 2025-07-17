#!/usr/bin/env node

import { FastMCP } from "fastmcp";
import { z } from "zod";

const server = new FastMCP({
    name: "Sleep MCP Server",
    version: "1.0.0",
});

server.addTool({
    name: "sleep",
    description: "Wait for the specified number of seconds.",
    parameters: z.object({
        seconds: z.number().min(0).describe("Number of seconds to sleep (must be greater than 0)")
    }),
    execute: async ({ seconds }) => {
        await new Promise(resolve => setTimeout(resolve, seconds * 1000));
        return `Slept for ${seconds} seconds.`;
    },
});

server.start({
    transportType: "stdio",
});
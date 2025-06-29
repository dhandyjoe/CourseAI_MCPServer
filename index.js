import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create an MCP server
const server = new McpServer({
  name: "demo-server",
  version: "1.0.0"
});

// Add an addition tool
server.registerTool("add",
  {
    title: "Addition Tool",
    description: "Add two numbers",
    inputSchema: { a: z.number(), b: z.number() }
  },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }]
  })
);

// Add a dynamic greeting resource
server.registerResource(
  "greeting",
  new ResourceTemplate("greeting://{name}", { list: undefined }),
  { 
    title: "Greeting Resource",      // Display name for UI
    description: "Dynamic greeting generator"
  },
  async (uri, { name }) => ({
    contents: [{
      uri: uri.href,
      text: `Hello, ${name}!`
    }]
  })
);

server.registerTool("getPost",
  {
    title: "Get JSONPlaceholder Post",
    description: "Fetch a post from JSONPlaceholder by ID",
    inputSchema: {
      id: z.number().int().min(1).max(100)
    }
  },
  async ({ id }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch post with id ${id}`);
    }

    const post = await response.json();

    return {
      content: [{
        type: "text",
        text: `success get data`,
        userId: post.userId,
        id: post.id,
        title: post.title,
        body: post.body
      }]
    };
  }
);



// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);
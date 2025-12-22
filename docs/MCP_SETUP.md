# Design System MCP Configuration

This document explains how to set up and use Model Context Protocol (MCP) with Figma to generate components from your design system.

## Prerequisites

1. **Figma Account** with access to your design system file
2. **Cursor AI** installed (latest version)
3. **Figma Personal Access Token**

## Step 1: Enable Figma Dev Mode MCP

1. Open Figma
2. Go to **Menu** → **Preferences** (or **Settings**)
3. Enable **Dev Mode** if not already enabled
4. Toggle on **Enable Dev Mode MCP server**
5. Note the server address (in your case: `http://127.0.0.1:3845/mcp`)

## Step 2: Get Your Figma Personal Access Token

1. Go to [Figma Account Settings](https://www.figma.com/settings)
2. Scroll to **Personal Access Tokens**
3. Click **Generate new token**
4. Give it a name (e.g., "Cursor MCP")
5. Copy the token immediately (you won't see it again)

## Step 3: Configure Cursor

### Configuration (Already Set Up!)

The `.cursorrules/mcp.json` file is already configured with your Figma MCP server:

\`\`\`json
{
  "mcpServers": {
    "figma": {
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
\`\`\`

**✅ No additional setup needed!** Cursor will automatically connect to your Figma MCP server.

## Step 4: Using MCP to Generate Components

### Basic Workflow

1. **In Figma:**
   - Navigate to your component
   - Right-click → **Copy link to selection**
   - The URL will look like: `https://www.figma.com/design/FILE_ID?node-id=...`

2. **In Cursor:**
   - Open the chat panel (`Cmd/Ctrl + L`)
   - Paste the Figma URL
   - Add a prompt like:

\`\`\`
Generate a React component from this Figma link using MCP.
Use TypeScript, Tailwind CSS, and match the design tokens from our system.
Create it as an atom/molecule/organism in the appropriate folder.
\`\`\`

### Example Prompts

#### For Atoms (Basic Components)
\`\`\`
Generate this Button component from Figma via MCP.
- Use our design tokens from src/theme/tokens.ts
- Include all variants (default, secondary, outline, etc.)
- Use class-variance-authority for variants
- Export as src/atoms/Button/Button.tsx
\`\`\`

#### For Molecules (Composite Components)
\`\`\`
Create this Card component from the Figma link using MCP.
- Compose it from atoms like Badge and Button
- Use our theme utilities
- Include CardHeader, CardContent, CardFooter subcomponents
- Save to src/molecules/Card/
\`\`\`

#### For Organisms (Complex Sections)
\`\`\`
Generate this Header component from Figma via MCP.
- Use atoms (Button) and molecules (SearchBar)
- Make it responsive with mobile menu
- Include navigation items and logo slot
- Place in src/organisms/Header/
\`\`\`

## Step 5: Batch Generation Workflow

For generating multiple components:

1. **Organize in Figma:** Create pages like "Atoms", "Molecules", "Organisms"
2. **Copy component links** one by one
3. **Use Cursor Composer** (`Cmd/Ctrl + I`) for multi-file generation:

\`\`\`
I have 5 button variants in Figma. Here are the links:
[paste links]

Generate all variants as a single Button component with CVA,
referencing our tokens. Save to src/atoms/Button/
\`\`\`

## Step 6: Extracting Design Tokens

To update tokens from Figma:

\`\`\`
Extract all design variables and tokens from my Figma file via MCP:
- Colors (including light/dark modes)
- Typography scales
- Spacing tokens
- Border radius values
- Shadows

Update src/theme/tokens.ts to match Figma exactly.
\`\`\`

## Troubleshooting

### Connection Issues

**Problem:** Cursor can't connect to Figma MCP server

**Solutions:**
- Ensure Figma is open and MCP is enabled in preferences
- Restart Figma and Cursor
- Check firewall settings (port 3845)
- Verify token is valid and not expired

### Generation Quality

**Problem:** Generated code doesn't match design

**Solutions:**
- Ensure Figma components use **variables** for colors, spacing, etc.
- Use **Auto Layout** in Figma for better structure detection
- Provide more context in prompts (reference specific tokens)
- Iterate: Ask Cursor to refine based on design system patterns

### Token Mismatches

**Problem:** Generated code uses hardcoded values

**Solutions:**
- Explicitly prompt to use tokens: "Use var(--color-primary) from our CSS variables"
- Reference the tokens file: "Import colors from @theme/tokens"
- Set up Figma variables properly with naming conventions

## Best Practices

1. **Naming Consistency:** Use same names in Figma and code (e.g., `Button/Primary` → `variant="primary"`)
2. **Component Sets:** Organize variants in Figma component sets for better detection
3. **Variables First:** Set up all tokens as Figma variables before generating code
4. **Incremental:** Start with atoms, then molecules, then organisms
5. **Review & Refine:** Always review generated code and adjust for your patterns

## Advanced: Programmatic Access

For scripting bulk operations, use Figma's REST API:

\`\`\`bash
# Get file components
curl -H "X-Figma-Token: YOUR_TOKEN" \\
  "https://api.figma.com/v1/files/FILE_KEY/components"
\`\`\`

Then pipe component IDs to Cursor prompts programmatically.

## Resources

- [Figma MCP Server Documentation](https://github.com/modelcontextprotocol/servers/tree/main/src/figma)
- [Cursor MCP Guide](https://docs.cursor.com/features/mcp)
- [shadcn-ui-kit Reference](https://github.com/Obra-Studio/shadcn-ui-kit)

## Support

For issues:
1. Check Figma's MCP server status in preferences
2. Verify token permissions
3. Review Cursor's MCP connection logs
4. Try with a simple component first

---

**Note:** Keep your Figma token secure. Never commit it to version control.


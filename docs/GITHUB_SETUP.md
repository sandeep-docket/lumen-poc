# GitHub Repository Setup

This guide will help you push your design system to GitHub.

## Quick Setup

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository with a name like `design-system` or `shadcn-design-system`
3. **Don't** initialize with README, .gitignore, or license (we already have these)
4. Copy the repository URL

### 2. Initialize Git and Push

```bash
# Navigate to project
cd "/Users/sandeepsalmon/Downloads/work/Docket/lumen test"

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Design system with Atomic Design structure"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Alternative: Using SSH

```bash
# If you prefer SSH
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Complete Command Sequence

Copy and paste this (after replacing YOUR_USERNAME and YOUR_REPO_NAME):

```bash
cd "/Users/sandeepsalmon/Downloads/work/Docket/lumen test"
git init
git add .
git commit -m "Initial commit: Design system with Atomic Design structure

- Set up project with TypeScript, React, Tailwind CSS
- Implemented Atomic Design structure (atoms, molecules, organisms)
- Created design tokens and theme system
- Added MCP configuration for Figma integration
- Included example components and documentation"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## What Gets Committed?

✅ **Included:**
- Source code (`src/`)
- Configuration files (`package.json`, `tsconfig.json`, etc.)
- Documentation (`docs/`, `README.md`)
- MCP configuration template (`.cursorrules/mcp.json`)

❌ **Excluded** (via `.gitignore`):
- `node_modules/` - Dependencies (will be installed via npm)
- `dist/` - Build output
- `.DS_Store` - System files
- IDE-specific files

## After Pushing

### Update Repository Settings

1. **Add Description:** "Design system built with Atomic Design methodology and shadcn-ui"
2. **Add Topics:** `design-system`, `atomic-design`, `shadcn-ui`, `react`, `typescript`, `tailwind`
3. **Set Website:** Your demo URL (if deployed)

### Enable GitHub Pages (Optional)

To host documentation or demo:

1. Go to Settings → Pages
2. Source: Deploy from branch
3. Branch: `main`, folder: `/docs` or build a static site
4. Save

### Add Repository Badges (Optional)

Add to top of README.md:

```markdown
![License](https://img.shields.io/github/license/YOUR_USERNAME/YOUR_REPO_NAME)
![Stars](https://img.shields.io/github/stars/YOUR_USERNAME/YOUR_REPO_NAME)
![Issues](https://img.shields.io/github/issues/YOUR_USERNAME/YOUR_REPO_NAME)
```

## Collaborating

### Clone for Others

Others can clone your repo:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
npm install
npm run dev
```

### Contributing Workflow

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-component`
3. Make changes and commit
4. Push and create Pull Request

## Security: Protecting Your Figma Token

**⚠️ IMPORTANT:** The `.cursorrules/mcp.json` file contains a placeholder token.

**Before committing:**
- Ensure the token says `YOUR_FIGMA_TOKEN_HERE` (placeholder)
- Never commit your actual Figma token

**For collaborators:**
- They should replace the placeholder with their own token locally
- The token should never be committed to the repository

**Alternative:** Use environment variables:

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-figma"],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "${FIGMA_TOKEN}"
      }
    }
  }
}
```

Then set `FIGMA_TOKEN` in your system environment.

## Continuous Integration (Optional)

Add GitHub Actions for automated testing and building:

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run build
```

## Publishing to npm (Optional)

To make your design system installable via npm:

1. Update `package.json`:
   ```json
   {
     "name": "@your-org/design-system",
     "version": "0.1.0",
     "publishConfig": {
       "access": "public"
     }
   }
   ```

2. Build and publish:
   ```bash
   npm run build
   npm login
   npm publish --access public
   ```

3. Others can install:
   ```bash
   npm install @your-org/design-system
   ```

## Troubleshooting

### Large Files Error

If you get "file too large" error:

```bash
# Check large files
find . -type f -size +100M

# Remove from git if needed
git rm --cached path/to/large-file
```

### Authentication Failed

**HTTPS:** You may need a Personal Access Token instead of password:
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate token with `repo` scope
3. Use token as password when prompted

**SSH:** Ensure SSH key is added:
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub
# Copy and add to GitHub Settings → SSH Keys
```

### Push Rejected

If remote has changes:

```bash
git pull origin main --rebase
git push origin main
```

## Next Steps

After pushing to GitHub:

1. ✅ Share the repository URL with your team
2. ✅ Set up branch protection rules (Settings → Branches)
3. ✅ Add collaborators (Settings → Collaborators)
4. ✅ Create issues for future components
5. ✅ Set up project board for tracking work

---

**Your repository will be at:**
`https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`


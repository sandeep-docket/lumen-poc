#!/bin/bash

# Setup Script for Design System
# This script will install dependencies and verify the setup

set -e  # Exit on error

echo "🎨 Design System Setup"
echo "====================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

echo "✓ Found package.json"
echo ""

# Check Node.js version
echo "📦 Checking Node.js version..."
NODE_VERSION=$(node -v)
echo "Node.js version: $NODE_VERSION"

# Install dependencies
echo ""
echo "📥 Installing dependencies..."
echo "This may take a few minutes..."
npm install

echo ""
echo "✓ Dependencies installed"
echo ""

# Verify structure
echo "🔍 Verifying project structure..."

check_file() {
    if [ -f "$1" ]; then
        echo "  ✓ $1"
    else
        echo "  ✗ $1 (missing)"
    fi
}

check_dir() {
    if [ -d "$1" ]; then
        echo "  ✓ $1/"
    else
        echo "  ✗ $1/ (missing)"
    fi
}

echo ""
echo "Configuration files:"
check_file "package.json"
check_file "tsconfig.json"
check_file "tailwind.config.js"
check_file "vite.config.ts"
check_file ".gitignore"
check_file ".eslintrc.cjs"

echo ""
echo "Documentation:"
check_file "README.md"
check_file "CONTRIBUTING.md"
check_file "CHANGELOG.md"
check_file "LICENSE"
check_file "docs/ATOMIC_DESIGN.md"
check_file "docs/MCP_SETUP.md"
check_file "docs/QUICK_START.md"

echo ""
echo "Source directories:"
check_dir "src/atoms"
check_dir "src/molecules"
check_dir "src/organisms"
check_dir "src/theme"

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Run development server: npm run dev"
echo "  2. Open http://localhost:5173"
echo "  3. Read docs/QUICK_START.md for usage"
echo "  4. Push to GitHub: See docs/GITHUB_SETUP.md"
echo ""
echo "Optional:"
echo "  - Configure Figma MCP: docs/MCP_SETUP.md"
echo "  - View examples: docs/EXAMPLES.md"
echo ""


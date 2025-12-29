import type { Meta, StoryObj } from '@storybook/react';
import { colors } from './tokens';

const meta = {
  title: 'Design System/Colors & Variables',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Documentation for the design system color tokens and variable structure.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper to convert HSL to hex for display
function hslToHex(hsl: string): string {
  // HSL format: "h s% l%" (e.g., "0 72% 51%")
  const parts = hsl.trim().split(/\s+/);
  if (parts.length !== 3) return '#000000';
  
  const h = parseFloat(parts[0]) / 360;
  const s = parseFloat(parts[1]) / 100;
  const l = parseFloat(parts[2]) / 100;
  
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h * 6) % 2 - 1));
  const m = l - c / 2;
  
  let r = 0, g = 0, b = 0;
  
  if (h < 1/6) { r = c; g = x; b = 0; }
  else if (h < 2/6) { r = x; g = c; b = 0; }
  else if (h < 3/6) { r = 0; g = c; b = x; }
  else if (h < 4/6) { r = 0; g = x; b = c; }
  else if (h < 5/6) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }
  
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);
  
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// Color Swatch Component
const ColorSwatch = ({ name, value, description }: { name: string; value: string; description?: string }) => {
  const hex = hslToHex(value);
  const isLight = parseFloat(value.split(' ')[2]?.replace('%', '') || '0') > 50;
  
  return (
    <div className="border rounded-lg overflow-hidden">
      <div 
        className="h-24 flex items-center justify-center"
        style={{ backgroundColor: `hsl(${value})` }}
      >
        <span className={`text-sm font-semibold ${isLight ? 'text-gray-900' : 'text-white'}`}>
          {hex}
        </span>
      </div>
      <div className="p-3 bg-white border-t">
        <div className="font-semibold text-sm">{name}</div>
        <div className="text-xs text-gray-600 mt-1">hsl({value})</div>
        {description && <div className="text-xs text-gray-500 mt-1">{description}</div>}
      </div>
    </div>
  );
};

// Color Pair Component (for background/foreground pairs)
const ColorPair = ({ 
  bgName, 
  bgValue, 
  fgValue, 
  description 
}: { 
  bgName: string; 
  bgValue: string; 
  fgValue: string;
  description?: string;
}) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div 
        className="h-32 flex items-center justify-center relative"
        style={{ backgroundColor: `hsl(${bgValue})` }}
      >
        <div 
          className="px-4 py-2 rounded"
          style={{ 
            backgroundColor: `hsl(${bgValue})`,
            color: `hsl(${fgValue})`
          }}
        >
          <span className="font-semibold">Sample Text</span>
        </div>
      </div>
      <div className="p-3 bg-white border-t">
        <div className="font-semibold text-sm mb-2">{bgName}</div>
        <div className="text-xs space-y-1">
          <div className="text-gray-600">Background: hsl({bgValue})</div>
          <div className="text-gray-600">Foreground: hsl({fgValue})</div>
          {description && <div className="text-gray-500 mt-2">{description}</div>}
        </div>
      </div>
    </div>
  );
};

export const ColorNaming: Story = {
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Color Naming Convention</h1>
        <p className="text-gray-600 mb-6">
          Our design system uses a semantic naming convention that pairs background colors with their corresponding foreground (text) colors.
        </p>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-3">Naming Pattern</h2>
          <div className="space-y-2 font-mono text-sm">
            <div><code className="bg-white px-2 py-1 rounded">--{'{color}'}</code> - Background color</div>
            <div><code className="bg-white px-2 py-1 rounded">--{'{color}'}-foreground</code> - Text color for that background</div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Color Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Semantic Colors</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• <code>primary</code> - Main brand color</li>
              <li>• <code>secondary</code> - Secondary actions</li>
              <li>• <code>destructive</code> - Error/danger states</li>
              <li>• <code>accent</code> - Accent/highlight color</li>
              <li>• <code>muted</code> - Subtle backgrounds</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Context Colors</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• <code>background</code> - Page background</li>
              <li>• <code>foreground</code> - Default text</li>
              <li>• <code>card</code> - Card backgrounds</li>
              <li>• <code>popover</code> - Popover/modal backgrounds</li>
              <li>• <code>border</code> - Border colors</li>
              <li>• <code>input</code> - Input backgrounds</li>
              <li>• <code>ring</code> - Focus ring color</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ColorStructure: Story = {
  render: () => {
    const modes = ['docket', 'web', 'dark'] as const;
    
    return (
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Color Structure & Modes</h1>
          <p className="text-gray-600 mb-6">
            The design system supports multiple color modes, each with its own set of semantic colors.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Available Modes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {modes.map((mode) => (
              <div key={mode} className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2 capitalize">{mode}</h3>
                <p className="text-sm text-gray-600">
                  {mode === 'docket' && 'Default mode for Docket applications'}
                  {mode === 'web' && 'Web-focused color palette'}
                  {mode === 'dark' && 'Dark mode variant'}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Variable Structure</h2>
          <div className="bg-gray-50 border rounded-lg p-6 mb-6">
            <h3 className="font-semibold mb-3">CSS Variable Format</h3>
            <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`/* Mode: docket (default) */
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 4%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;
  /* ... */
}

/* Mode: web */
.mode-web {
  --background: 0 0% 100%;
  --foreground: 229 84% 5%;
  /* ... */
}

/* Mode: dark */
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... */
}`}
            </pre>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">TypeScript Token Structure</h2>
          <div className="bg-gray-50 border rounded-lg p-6">
            <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`import { colors } from '@theme/tokens';

// Access colors by mode
colors.docket.primary
colors.web.primary
colors.dark.primary

// Structure:
colors: {
  docket: {
    background: '0 0% 100%',
    foreground: '0 0% 4%',
    primary: '0 0% 9%',
    primaryForeground: '0 0% 98%',
    // ...
  },
  web: { /* ... */ },
  dark: { /* ... */ }
}`}
            </pre>
          </div>
        </div>
      </div>
    );
  },
};

export const SemanticColors: Story = {
  render: () => {
    const mode = 'docket';
    const modeColors = colors[mode];
    
    const semanticPairs = [
      { bg: 'primary', fg: 'primaryForeground', desc: 'Main brand color for primary actions' },
      { bg: 'secondary', fg: 'secondaryForeground', desc: 'Secondary actions and elements' },
      { bg: 'destructive', fg: 'destructiveForeground', desc: 'Error states and destructive actions' },
      { bg: 'accent', fg: 'accentForeground', desc: 'Accent color for highlights' },
      { bg: 'muted', fg: 'mutedForeground', desc: 'Subtle backgrounds and muted text' },
    ];
    
    return (
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Semantic Colors ({mode})</h1>
          <p className="text-gray-600 mb-6">
            Semantic colors are paired with their foreground colors to ensure proper contrast and readability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {semanticPairs.map(({ bg, fg, desc }) => (
            <ColorPair
              key={bg}
              bgName={bg}
              bgValue={modeColors[bg as keyof typeof modeColors] as string}
              fgValue={modeColors[fg as keyof typeof modeColors] as string}
              description={desc}
            />
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Usage in Tailwind</h2>
          <div className="bg-gray-50 border rounded-lg p-6">
            <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`// Background and text
<div className="bg-primary text-primary-foreground">
  Primary Button
</div>

// Hover states
<button className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
  Delete
</button>

// Border colors
<div className="border border-border">
  Content
</div>`}
            </pre>
          </div>
        </div>
      </div>
    );
  },
};

export const ContextColors: Story = {
  render: () => {
    const mode = 'docket';
    const modeColors = colors[mode];
    
    const contextColors = [
      { name: 'background', value: modeColors.background, desc: 'Main page background' },
      { name: 'foreground', value: modeColors.foreground, desc: 'Default text color' },
      { name: 'card', value: modeColors.card, desc: 'Card component background' },
      { name: 'cardForeground', value: modeColors.cardForeground, desc: 'Text color for cards' },
      { name: 'popover', value: modeColors.popover, desc: 'Popover/modal background' },
      { name: 'popoverForeground', value: modeColors.popoverForeground, desc: 'Text color for popovers' },
      { name: 'border', value: modeColors.border, desc: 'Border color' },
      { name: 'input', value: modeColors.input, desc: 'Input field background' },
      { name: 'ring', value: modeColors.ring, desc: 'Focus ring color' },
    ];
    
    return (
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Context Colors ({mode})</h1>
          <p className="text-gray-600 mb-6">
            Context colors are used for specific UI elements and surfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {contextColors.map(({ name, value, desc }) => (
            <ColorSwatch
              key={name}
              name={name}
              value={value as string}
              description={desc}
            />
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Usage Examples</h2>
          <div className="bg-gray-50 border rounded-lg p-6">
            <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`// Page background
<body className="bg-background text-foreground">
  Content
</body>

// Card component
<div className="bg-card text-card-foreground border border-border">
  Card content
</div>

// Input field
<input className="bg-input border border-border focus:ring-2 focus:ring-ring" />

// Popover
<div className="bg-popover text-popover-foreground">
  Popover content
</div>`}
            </pre>
          </div>
        </div>
      </div>
    );
  },
};

export const ModeComparison: Story = {
  render: () => {
    const modes = ['docket', 'web', 'dark'] as const;
    const colorKeys = ['primary', 'secondary', 'destructive', 'background', 'foreground'] as const;
    
    return (
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Mode Comparison</h1>
          <p className="text-gray-600 mb-6">
            Compare color values across different modes.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2">
                <th className="text-left p-3 font-semibold">Color</th>
                {modes.map(mode => (
                  <th key={mode} className="text-left p-3 font-semibold capitalize">{mode}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {colorKeys.map(colorKey => (
                <tr key={colorKey} className="border-b">
                  <td className="p-3 font-medium">{colorKey}</td>
                  {modes.map(mode => {
                    const value = colors[mode][colorKey] as string;
                    return (
                      <td key={mode} className="p-3">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-12 h-12 rounded border"
                            style={{ backgroundColor: `hsl(${value})` }}
                          />
                          <code className="text-sm">{value}</code>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  },
};

export const FigmaVariableStructure: Story = {
  render: () => {
    return (
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Figma Variable Structure</h1>
          <p className="text-gray-600 mb-6">
            The design system is synced with Figma variables. Here's how they're structured.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Figma Variable Hierarchy</h2>
          <div className="bg-gray-50 border rounded-lg p-6 mb-6">
            <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`Figma Variables Structure:
├── semantic colors
│   ├── web (mode)
│   │   ├── general
│   │   │   ├── background
│   │   │   ├── foreground
│   │   │   ├── primary
│   │   │   ├── primary foreground
│   │   │   └── ...
│   │   ├── card
│   │   │   ├── card
│   │   │   └── card foreground
│   │   ├── popover
│   │   ├── unofficial
│   │   ├── focus
│   │   ├── sidebar
│   │   └── chart
│   ├── docket (mode)
│   │   └── (same structure)
│   └── shadcn-dark (mode)
│       └── (same structure)
└── raw colors
    ├── neutral (palette)
    ├── slate (palette)
    ├── red (palette)
    └── ...`}
            </pre>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Variable Sections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">general</h3>
              <p className="text-sm text-gray-600">
                Core semantic colors: background, foreground, primary, secondary, destructive, etc.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">card</h3>
              <p className="text-sm text-gray-600">
                Colors specific to card components.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">popover</h3>
              <p className="text-sm text-gray-600">
                Colors for popover and modal components.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">unofficial</h3>
              <p className="text-sm text-gray-600">
                Additional colors not part of the official spec but used in components.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">focus</h3>
              <p className="text-sm text-gray-600">
                Focus ring and focus state colors.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">sidebar</h3>
              <p className="text-sm text-gray-600">
                Sidebar-specific color tokens.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Importing from Figma</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="mb-4 text-sm">
              To sync variables from Figma, export them and run:
            </p>
            <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`npm run parse-figma`}
            </pre>
            <p className="mt-4 text-sm text-gray-600">
              This will regenerate <code>src/theme/figma-tokens.ts</code> with the latest values from Figma.
            </p>
          </div>
        </div>
      </div>
    );
  },
};


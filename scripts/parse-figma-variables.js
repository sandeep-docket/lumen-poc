/**
 * Parse Figma Variables Export and Generate Tokens
 * 
 * This script parses the Figma variables export JSON and generates
 * TypeScript token files that match the Figma structure exactly.
 */

const fs = require('fs');
const path = require('path');

// Read the Figma export
const exportPath = path.join(__dirname, '../export.json');
const figmaExport = JSON.parse(fs.readFileSync(exportPath, 'utf8'));

// Helper to convert hex to HSL
function hexToHsl(hex) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l;

  l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
      default: h = 0;
    }
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `${h} ${s}% ${l}%`;
}

// Find raw colors collection
function findRawColors(exportData) {
  const rawColorsCollection = exportData.find(item => item['raw colors']);
  if (!rawColorsCollection) return null;
  
  const modes = rawColorsCollection['raw colors'].modes;
  const mode1 = modes['Mode 1'] || Object.values(modes)[0];
  
  return mode1;
}

// Resolve color reference (e.g., {neutral.950} -> actual hex)
function resolveColorReference(ref, rawColors) {
  if (!ref || typeof ref !== 'string') return null;
  
  // Remove { } brackets
  ref = ref.replace(/[{}]/g, '');
  
  // Handle simple colors like {white}, {black}
  if (ref === 'white') return rawColors.white?.$value || '#ffffff';
  if (ref === 'black') return rawColors.black?.$value || '#000000';
  
  // Handle color.shade like {neutral.950}
  const [colorFamily, shade] = ref.split('.');
  if (colorFamily && shade && rawColors[colorFamily] && rawColors[colorFamily][shade]) {
    return rawColors[colorFamily][shade].$value;
  }
  
  return null;
}

// Find semantic colors collection
function findSemanticColors(exportData) {
  const semanticCollection = exportData.find(item => item['semantic colors']);
  if (!semanticCollection) return null;
  
  return semanticCollection['semantic colors'].modes;
}

// Generate tokens from Figma export
function generateTokens() {
  const rawColors = findRawColors(figmaExport);
  const semanticModes = findSemanticColors(figmaExport);
  
  if (!rawColors || !semanticModes) {
    console.error('Could not find raw colors or semantic colors in export');
    return;
  }
  
  // Process each mode (web, docket)
  const processedModes = {};
  
  for (const [modeName, modeData] of Object.entries(semanticModes)) {
    processedModes[modeName] = {};
    
    // Process each section (general, card, popover, etc.)
    for (const [sectionName, sectionData] of Object.entries(modeData)) {
      processedModes[modeName][sectionName] = {};
      
      for (const [tokenName, tokenData] of Object.entries(sectionData)) {
        if (!tokenData || !tokenData.$value) continue;
        
        const ref = tokenData.$value;
        const hex = resolveColorReference(ref, rawColors);
        
        if (hex) {
          processedModes[modeName][sectionName][tokenName] = {
            hex,
            hsl: hexToHsl(hex),
            description: tokenData.$description || null,
            scopes: tokenData.$scopes || [],
          };
        } else {
          console.warn(`⚠️  Could not resolve color reference: ${ref} for token ${tokenName}`);
        }
      }
    }
  }
  
  // Also extract raw colors for direct access
  const rawColorsProcessed = {};
  for (const [colorName, colorData] of Object.entries(rawColors)) {
    if (colorData.$value) {
      // Simple color like white, black
      rawColorsProcessed[colorName] = {
        hex: colorData.$value,
        hsl: hexToHsl(colorData.$value),
      };
    } else {
      // Color family with shades
      rawColorsProcessed[colorName] = {};
      for (const [shade, shadeData] of Object.entries(colorData)) {
        rawColorsProcessed[colorName][shade] = {
          hex: shadeData.$value,
          hsl: hexToHsl(shadeData.$value),
        };
      }
    }
  }
  
  return {
    semantic: processedModes,
    raw: rawColorsProcessed,
  };
}

// Generate TypeScript file
function generateTypeScriptFile(tokens) {
  let output = `/**
 * Design Tokens - Generated from Figma Variables
 * 
 * This file is auto-generated from Figma variables export.
 * DO NOT EDIT MANUALLY - regenerate using: npm run parse-figma
 * 
 * Source: Figma file AoGtHpo2A4Y68YsWDMoMM4 (lumos)
 * Generated: ${new Date().toISOString()}
 */

`;

  // Generate semantic tokens
  output += `// Semantic color tokens from Figma\n`;
  output += `export const semanticColors = {\n`;
  
  for (const [modeName, modeData] of Object.entries(tokens.semantic)) {
    output += `  ${modeName}: {\n`;
    
    for (const [sectionName, sectionData] of Object.entries(modeData)) {
      output += `    ${sectionName}: {\n`;
      
      for (const [tokenName, tokenData] of Object.entries(sectionData)) {
        const camelName = tokenName.replace(/\s+/g, '').replace(/^./, c => c.toLowerCase());
        output += `      ${camelName}: '${tokenData.hsl}', // ${tokenData.hex}${tokenData.description ? ` - ${tokenData.description}` : ''}\n`;
      }
      
      output += `    },\n`;
    }
    
    output += `  },\n`;
  }
  
  output += `} as const;\n\n`;
  
  // Generate raw colors
  output += `// Raw colors from Figma\n`;
  output += `export const rawColors = {\n`;
  
  for (const [colorName, colorData] of Object.entries(tokens.raw)) {
    if (colorData.hex) {
      // Simple color
      output += `  ${colorName}: {\n`;
      output += `    hex: '${colorData.hex}',\n`;
      output += `    hsl: '${colorData.hsl}',\n`;
      output += `  },\n`;
    } else {
      // Color family
      output += `  ${colorName}: {\n`;
      for (const [shade, shadeData] of Object.entries(colorData)) {
        output += `    ${shade}: {\n`;
        output += `      hex: '${shadeData.hex}',\n`;
        output += `      hsl: '${shadeData.hsl}',\n`;
        output += `    },\n`;
      }
      output += `  },\n`;
    }
  }
  
  output += `} as const;\n\n`;
  
  // Export default
  output += `export default {\n`;
  output += `  semantic: semanticColors,\n`;
  output += `  raw: rawColors,\n`;
  output += `};\n`;
  
  return output;
}

// Main execution
try {
  const tokens = generateTokens();
  const tsContent = generateTypeScriptFile(tokens);
  
  // Write to file
  const outputPath = path.join(__dirname, '../src/theme/figma-tokens.ts');
  fs.writeFileSync(outputPath, tsContent, 'utf8');
  
  console.log('✅ Successfully generated tokens from Figma export!');
  console.log(`📁 Output: ${outputPath}`);
  console.log(`📊 Modes found: ${Object.keys(tokens.semantic).join(', ')}`);
} catch (error) {
  console.error('❌ Error generating tokens:', error);
  process.exit(1);
}


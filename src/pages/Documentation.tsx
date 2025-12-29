import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@molecules/Card';
import { Button } from '@atoms/Button';
import { BookOpen, ExternalLink, Code, Palette, Layers } from 'lucide-react';

const STORYBOOK_URL = 'https://lumen-oapne9lx7-sandeepdockets-projects.vercel.app';

export function Documentation() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center py-8 mb-8">
        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Learn how to use the Docket Design System
        </p>
        <Button 
          size="lg" 
          className="text-lg px-8 py-6 h-auto"
          onClick={() => window.open(STORYBOOK_URL, '_blank')}
        >
          <BookOpen className="mr-2 h-5 w-5" />
          Open Storybook Documentation
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <Code className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Quick start guide</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Learn how to install and use components in your project.
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open(STORYBOOK_URL, '_blank')}
            >
              View Guide
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Palette className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Design Tokens</CardTitle>
            <CardDescription>Colors, typography, spacing</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Explore our design tokens and color system synced from Figma.
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open(`${STORYBOOK_URL}?path=/story/design-system-colors--color-naming`, '_blank')}
            >
              View Tokens
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Layers className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Atomic Design</CardTitle>
            <CardDescription>Component structure</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Understand how components are organized using Atomic Design principles.
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open(STORYBOOK_URL, '_blank')}
            >
              Learn More
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Component API Reference</CardTitle>
          <CardDescription>Detailed props and usage examples</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Each component in Storybook includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>Interactive component playground</li>
            <li>Props documentation with types</li>
            <li>Usage examples and variants</li>
            <li>Accessibility guidelines</li>
            <li>Design token usage</li>
          </ul>
          <Button onClick={() => window.open(STORYBOOK_URL, '_blank')}>
            <BookOpen className="mr-2 h-4 w-4" />
            Browse Component Docs
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}


import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@molecules/Card';
import { Button } from '@atoms/Button';
import { Badge } from '@atoms/Badge';
import { Input } from '@atoms/Input';
import { Label } from '@atoms/Label';
import { BookOpen, ExternalLink } from 'lucide-react';

const STORYBOOK_URL = 'https://lumen-oapne9lx7-sandeepdockets-projects.vercel.app';

export function Components() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center py-8 mb-8">
        <h1 className="text-4xl font-bold mb-4">Components</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Browse all available components in our design system
        </p>
        <Button 
          size="lg" 
          className="text-lg px-8 py-6 h-auto"
          onClick={() => window.open(STORYBOOK_URL, '_blank')}
        >
          <BookOpen className="mr-2 h-5 w-5" />
          Open Storybook
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Atoms */}
        <Card>
          <CardHeader>
            <CardTitle>Atoms</CardTitle>
            <CardDescription>Basic building blocks of the design system</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Button</h3>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Default</Button>
                <Button variant="secondary" size="sm">Secondary</Button>
                <Button variant="outline" size="sm">Outline</Button>
                <Button variant="destructive" size="sm">Destructive</Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Badge</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Input</h3>
              <Input placeholder="Enter text..." />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Label</h3>
              <Label>Form Label</Label>
            </div>
          </CardContent>
        </Card>

        {/* Molecules */}
        <Card>
          <CardHeader>
            <CardTitle>Molecules</CardTitle>
            <CardDescription>Simple component compositions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Card</h3>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Example Card</CardTitle>
                  <CardDescription className="text-xs">Card description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">Card content goes here</p>
                </CardContent>
              </Card>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Form Field</h3>
              <div className="space-y-2">
                <Label htmlFor="example">Example Field</Label>
                <Input id="example" placeholder="Type here..." />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground mb-4">
          For detailed component documentation, props, and examples, visit Storybook
        </p>
        <Button onClick={() => window.open(STORYBOOK_URL, '_blank')}>
          <BookOpen className="mr-2 h-4 w-4" />
          View Full Component Library
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}


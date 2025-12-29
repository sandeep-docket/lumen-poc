import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@molecules/Card';
import { Button } from '@atoms/Button';
import { Badge } from '@atoms/Badge';
import { BookOpen, ExternalLink, Github } from 'lucide-react';

const STORYBOOK_URL = 'https://lumen-oapne9lx7-sandeepdockets-projects.vercel.app';
const GITHUB_URL = 'https://github.com/sandeep-docket/lumen-poc';

export function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center py-8 mb-8">
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <p className="text-xl text-muted-foreground">
          Docket Design System
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>About This Design System</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The Docket Design System is built using Atomic Design methodology, providing
            a comprehensive library of reusable components that can be composed to build
            consistent user interfaces.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="outline">Tailwind CSS</Badge>
            <Badge>Atomic Design</Badge>
            <Badge variant="secondary">Storybook</Badge>
            <Badge variant="outline">Figma Sync</Badge>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Atomic Design structure (Atoms, Molecules, Organisms)</li>
              <li>• Fully typed with TypeScript</li>
              <li>• Design tokens synced from Figma</li>
              <li>• Comprehensive Storybook documentation</li>
              <li>• Dark mode support</li>
              <li>• Accessible components</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => window.open(STORYBOOK_URL, '_blank')}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Storybook Documentation
              <ExternalLink className="ml-auto h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => window.open(GITHUB_URL, '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub Repository
              <ExternalLink className="ml-auto h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Get Started</CardTitle>
          <CardDescription>Start using the design system</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Explore all components, view code examples, and test interactions in Storybook.
          </p>
          <Button 
            size="lg"
            className="w-full"
            onClick={() => window.open(STORYBOOK_URL, '_blank')}
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Open Storybook
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}


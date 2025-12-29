import { Button } from '@atoms/Button';
import { Badge } from '@atoms/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@molecules/Card';
import { SearchBar } from '@molecules/SearchBar';
import { BookOpen, ExternalLink } from 'lucide-react';

const STORYBOOK_URL = 'https://lumen-oapne9lx7-sandeepdockets-projects.vercel.app';

export function Home() {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-12 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Docket Design System Demo
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A complete design system built with Atomic Design methodology,
          featuring atoms, molecules, and organisms.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Badge variant="default">TypeScript</Badge>
          <Badge variant="secondary">Tailwind CSS</Badge>
          <Badge variant="outline">Atomic Design</Badge>
        </div>
        <div className="pt-6">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 h-auto"
            onClick={() => window.open(STORYBOOK_URL, '_blank')}
          >
            <BookOpen className="mr-2 h-5 w-5" />
            View Storybook
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Components Showcase */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {/* Atoms Example */}
        <Card>
          <CardHeader>
            <CardTitle>Atoms</CardTitle>
            <CardDescription>Basic building blocks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Buttons</p>
              <div className="flex flex-wrap gap-2">
                <Button variant="default" size="sm">Default</Button>
                <Button variant="secondary" size="sm">Secondary</Button>
                <Button variant="outline" size="sm">Outline</Button>
                <Button variant="destructive" size="sm">Destructive</Button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Badges</p>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Molecules Example */}
        <Card>
          <CardHeader>
            <CardTitle>Molecules</CardTitle>
            <CardDescription>Simple compositions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Search Bar</p>
              <SearchBar
                onSearch={handleSearch}
                placeholder="Search components..."
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Card Component</p>
              <p className="text-sm text-muted-foreground">
                This card itself is a molecule, composed of atoms like headings and text.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Organisms Example */}
        <Card>
          <CardHeader>
            <CardTitle>Organisms</CardTitle>
            <CardDescription>Complex sections</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Complex components like the Header, Footer, and Forms are organisms
              that compose multiple molecules and atoms together.
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open(STORYBOOK_URL, '_blank')}
            >
              View in Storybook
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Features */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Atomic Design', desc: 'Organized structure' },
            { title: 'TypeScript', desc: 'Fully typed' },
            { title: 'Dark Mode', desc: 'Built-in themes' },
            { title: 'Figma Sync', desc: 'Design tokens' },
          ].map((feature, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}


import { useState } from 'react';
import { Button } from '@atoms/Button';
import { Badge } from '@atoms/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@molecules/Card';
import { SearchBar } from '@molecules/SearchBar';
import { Header } from '@organisms/Header';
import { Footer } from '@organisms/Footer';
import { LoginForm } from '@organisms/LoginForm';
import { toggleTheme } from '@theme';
import { Moon, Sun, Github } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleThemeToggle = () => {
    toggleTheme();
    setIsDark(!isDark);
  };

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  const handleLogin = (data: { email: string; password: string }) => {
    console.log('Login:', data);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        logo={<span className="text-xl font-bold">Design System</span>}
        navItems={[
          { label: 'Home', href: '/', active: true },
          { label: 'Components', href: '/components' },
          { label: 'Documentation', href: '/docs' },
          { label: 'About', href: '/about' },
        ]}
        actions={
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleThemeToggle}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="default">Get Started</Button>
          </>
        }
      />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Design System Demo
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
                Complex components like the Header, Footer, and LoginForm are organisms
                that compose multiple molecules and atoms together.
              </p>
              <Button variant="outline" className="w-full">
                View Login Form Below
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Login Form Example */}
        <section className="py-8 flex justify-center">
          <LoginForm
            onSubmit={handleLogin}
            onForgotPassword={() => console.log('Forgot password')}
            onSignUp={() => console.log('Sign up')}
          />
        </section>

        {/* Features */}
        <section className="py-8">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Atomic Design', desc: 'Organized structure' },
              { title: 'TypeScript', desc: 'Fully typed' },
              { title: 'Dark Mode', desc: 'Built-in themes' },
              { title: 'MCP Ready', desc: 'Figma integration' },
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
      </main>

      <Footer
        sections={[
          {
            title: 'Product',
            links: [
              { label: 'Features', href: '/features' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'Documentation', href: '/docs' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '/about' },
              { label: 'Blog', href: '/blog' },
              { label: 'Careers', href: '/careers' },
            ],
          },
          {
            title: 'Resources',
            links: [
              { label: 'Community', href: '/community' },
              { label: 'Support', href: '/support' },
              { label: 'Status', href: '/status' },
            ],
          },
          {
            title: 'Legal',
            links: [
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
              { label: 'License', href: '/license' },
            ],
          },
        ]}
        copyright="© 2024 Design System. Built with Cursor AI."
        socialLinks={
          <>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </>
        }
      />
    </div>
  );
}

export default App;


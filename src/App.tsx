import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Button } from '@atoms/Button';
import { Header } from '@organisms/Header';
import { Footer } from '@organisms/Footer';
import { toggleTheme } from '@theme/theme';
import { Moon, Sun, Github, BookOpen, ExternalLink } from 'lucide-react';
import { Home } from './pages/Home';
import { Components } from './pages/Components';
import { Documentation } from './pages/Documentation';
import { About } from './pages/About';

const STORYBOOK_URL = 'https://lumen-oapne9lx7-sandeepdockets-projects.vercel.app';

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleThemeToggle = () => {
    toggleTheme();
    setIsDark(!isDark);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header
          logo={<span className="text-xl font-bold">Docket Design System</span>}
          navItems={[
            { label: 'Home', href: '/' },
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
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button 
                variant="default"
                onClick={() => window.open(STORYBOOK_URL, '_blank')}
                className="hidden md:flex"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Storybook
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </>
          }
        />

        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer
          sections={[
            {
              title: 'Product',
              links: [
                { label: 'Components', href: '/components' },
                { label: 'Documentation', href: '/docs' },
                { label: 'Storybook', href: STORYBOOK_URL, external: true },
              ],
            },
            {
              title: 'Resources',
              links: [
                { label: 'GitHub', href: 'https://github.com/sandeep-docket/lumen-poc', external: true },
                { label: 'About', href: '/about' },
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
          copyright="© 2024 Docket Design System. Built with Cursor AI."
          socialLinks={
            <>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/sandeep-docket/lumen-poc" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </>
          }
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
import { Button } from '@atoms/Button';
import { Github } from 'lucide-react';

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    copyright: '© 2024 Design System. All rights reserved.',
  },
};

export const WithSections: Story = {
  args: {
    sections: [
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
        ],
      },
    ],
    copyright: '© 2024 Design System',
  },
};

export const WithSocialLinks: Story = {
  args: {
    sections: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '/features' },
          { label: 'Pricing', href: '/pricing' },
        ],
      },
    ],
    copyright: '© 2024 Design System',
    socialLinks: (
      <>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </a>
        </Button>
      </>
    ),
  },
};


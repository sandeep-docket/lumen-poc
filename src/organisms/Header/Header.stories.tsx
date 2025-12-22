import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { Button } from '@atoms/Button';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    logo: <span className="text-xl font-bold">Logo</span>,
    navItems: [
      { label: 'Home', href: '/', active: true },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: <Button>Sign In</Button>,
  },
};

export const Minimal: Story = {
  args: {
    logo: <span className="text-xl font-bold">Brand</span>,
    navItems: [],
  },
};

export const WithMultipleActions: Story = {
  args: {
    logo: <span className="text-xl font-bold">App</span>,
    navItems: [
      { label: 'Home', href: '/', active: true },
      { label: 'Products', href: '/products' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Docs', href: '/docs' },
    ],
    actions: (
      <>
        <Button variant="ghost">Docs</Button>
        <Button variant="outline">Sign In</Button>
        <Button>Get Started</Button>
      </>
    ),
  },
};


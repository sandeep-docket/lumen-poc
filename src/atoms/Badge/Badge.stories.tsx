import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { X, Check } from 'lucide-react';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost'],
    },
    roundness: {
      control: 'select',
      options: ['default', 'round'],
    },
    state: {
      control: 'select',
      options: ['default', 'focus'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Label',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Label',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Label',
  },
};

export const Round: Story = {
  args: {
    variant: 'default',
    roundness: 'round',
    children: 'Label',
  },
};

export const Focus: Story = {
  args: {
    variant: 'default',
    state: 'focus',
    children: 'Label',
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge leftIcon={<Check className="w-3 h-3" />}>With Left Icon</Badge>
      <Badge rightIcon={<X className="w-3 h-3" />}>With Right Icon</Badge>
      <Badge leftIcon={<Check className="w-3 h-3" />} rightIcon={<X className="w-3 h-3" />}>
        Both Icons
      </Badge>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold mb-2">Default Roundness</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="ghost">Ghost</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Round Roundness</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default" roundness="round">Primary</Badge>
          <Badge variant="secondary" roundness="round">Secondary</Badge>
          <Badge variant="outline" roundness="round">Outline</Badge>
          <Badge variant="ghost" roundness="round">Ghost</Badge>
          <Badge variant="destructive" roundness="round">Destructive</Badge>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Focus States</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default" state="focus">Primary Focus</Badge>
          <Badge variant="secondary" state="focus">Secondary Focus</Badge>
          <Badge variant="outline" state="focus">Outline Focus</Badge>
          <Badge variant="ghost" state="focus">Ghost Focus</Badge>
          <Badge variant="destructive" state="focus">Destructive Focus</Badge>
        </div>
      </div>
    </div>
  ),
};

export const FigmaComparison: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Default Roundness - All Variants</h3>
        <div className="grid grid-cols-5 gap-4">
          <div className="space-y-2">
            <div className="text-xs text-gray-500 mb-1">Primary</div>
            <Badge variant="default" roundness="default">Label</Badge>
            <Badge variant="default" roundness="default" state="focus">Label</Badge>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-gray-500 mb-1">Secondary</div>
            <Badge variant="secondary" roundness="default">Label</Badge>
            <Badge variant="secondary" roundness="default" state="focus">Label</Badge>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-gray-500 mb-1">Outline</div>
            <Badge variant="outline" roundness="default">Label</Badge>
            <Badge variant="outline" roundness="default" state="focus">Label</Badge>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-gray-500 mb-1">Ghost</div>
            <Badge variant="ghost" roundness="default">Label</Badge>
            <Badge variant="ghost" roundness="default" state="focus">Label</Badge>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-gray-500 mb-1">Destructive</div>
            <Badge variant="destructive" roundness="default">Label</Badge>
            <Badge variant="destructive" roundness="default" state="focus">Label</Badge>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Round Roundness - All Variants</h3>
        <div className="grid grid-cols-5 gap-4">
          <div className="space-y-2">
            <div className="text-xs text-gray-500 mb-1">Primary</div>
            <Badge variant="default" roundness="round">Label</Badge>
            <Badge variant="default" roundness="round" state="focus">Label</Badge>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-gray-500 mb-1">Secondary</div>
            <Badge variant="secondary" roundness="round">Label</Badge>
            <Badge variant="secondary" roundness="round" state="focus">Label</Badge>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-gray-500 mb-1">Outline</div>
            <Badge variant="outline" roundness="round">Label</Badge>
            <Badge variant="outline" roundness="round" state="focus">Label</Badge>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-gray-500 mb-1">Ghost</div>
            <Badge variant="ghost" roundness="round">Label</Badge>
            <Badge variant="ghost" roundness="round" state="focus">Label</Badge>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-gray-500 mb-1">Destructive</div>
            <Badge variant="destructive" roundness="round">Label</Badge>
            <Badge variant="destructive" roundness="round" state="focus">Label</Badge>
          </div>
        </div>
      </div>
    </div>
  ),
};


import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Label',
    htmlFor: 'input-id',
  },
};

export const Required: Story = {
  render: () => (
    <Label htmlFor="email">
      Email <span className="text-destructive ml-1">*</span>
    </Label>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <p className="text-sm text-muted-foreground">Must be at least 8 characters</p>
    </div>
  ),
};


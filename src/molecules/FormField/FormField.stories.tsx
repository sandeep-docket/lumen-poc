import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  args: {
    label: 'Email',
    id: 'email',
    inputProps: {
      type: 'email',
      placeholder: 'name@example.com',
    },
  },
};

export const Required: Story = {
  args: {
    label: 'Password',
    id: 'password',
    required: true,
    inputProps: {
      type: 'password',
      placeholder: '••••••••',
    },
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    id: 'email-error',
    error: 'Please enter a valid email address',
    inputProps: {
      type: 'email',
      placeholder: 'name@example.com',
      defaultValue: 'invalid-email',
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    id: 'disabled',
    inputProps: {
      disabled: true,
      placeholder: 'Cannot edit',
    },
  },
};


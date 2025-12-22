import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'Organisms/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    onSubmit: (data) => {
      console.log('Login:', data);
    },
  },
};

export const WithForgotPassword: Story = {
  args: {
    onSubmit: (data) => {
      console.log('Login:', data);
    },
    onForgotPassword: () => {
      console.log('Forgot password clicked');
    },
  },
};

export const WithSignUp: Story = {
  args: {
    onSubmit: (data) => {
      console.log('Login:', data);
    },
    onSignUp: () => {
      console.log('Sign up clicked');
    },
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    onSubmit: (data) => {
      console.log('Login:', data);
    },
  },
};

export const Complete: Story = {
  args: {
    onSubmit: (data) => {
      console.log('Login:', data);
    },
    onForgotPassword: () => {
      console.log('Forgot password');
    },
    onSignUp: () => {
      console.log('Sign up');
    },
  },
};


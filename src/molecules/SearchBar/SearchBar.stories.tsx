import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
    onSearch: (query) => {
      console.log('Search:', query);
    },
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Search products...',
    onSearch: (query) => {
      console.log('Search:', query);
    },
  },
};

export const InHeader: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium">Search:</span>
      <SearchBar
        placeholder="Search documentation..."
        onSearch={(query) => console.log('Search:', query)}
      />
    </div>
  ),
};


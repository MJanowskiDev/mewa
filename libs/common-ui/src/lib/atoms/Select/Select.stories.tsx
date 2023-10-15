import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta = {
  title: 'UI/Atoms/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
];

export const Default: Story = {
  args: {
    id: 'default-select',
    label: 'Please select an option',
    options,
  },
};

export const Filled: Story = {
  args: {
    id: 'filled-select',
    variant: 'filled',
    label: 'Please select an option',
    options,
  },
};

export const InlineLabel: Story = {
  args: {
    id: 'inline-label-select',
    labelPosition: 'inline',
    label: 'Please select an option',
    options,
  },
};

export const Small: Story = {
  args: {
    id: 'inline-label-select',
    labelPosition: 'inline',
    label: 'Please select an option',
    selectSize: 'small',
    options,
  },
};

export const Errored: Story = {
  args: {
    id: 'errored-select',
    selectState: 'error',
    label: 'Please select an option',
    options,
  },
};

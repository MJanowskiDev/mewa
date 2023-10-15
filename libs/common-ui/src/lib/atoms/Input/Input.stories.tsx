import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
  title: 'UI/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    id: 'default-input',
    label: 'Text Input',
    placeholder: 'Placeholder',
  },
};

export const Outlined: Story = {
  args: {
    type: 'text',
    id: 'default-input',
    label: 'Text Input',
    placeholder: 'Placeholder',
    variant: 'filled',
  },
};

export const Errored: Story = {
  args: {
    type: 'text',
    id: 'errored-input',
    label: 'Text Input',
    placeholder: 'Placeholder',
    inputState: 'error',
  },
};

export const Small: Story = {
  args: {
    type: 'text',
    id: 'small-text-input',
    label: 'Email',
    inputSize: 'small',
  },
};

export const InlineLabel: Story = {
  args: {
    type: 'text',
    id: 'inline-label-text-input',
    label: 'Email',
    labelPosition: 'inline',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    id: 'password-input',
    label: 'Password Input',
  },
};

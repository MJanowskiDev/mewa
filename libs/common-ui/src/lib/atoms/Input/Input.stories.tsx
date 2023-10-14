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

export const Email: Story = {
  args: {
    type: 'email',
    id: 'email-input',
    label: 'Email',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    id: 'password-input',
    label: 'Password Input',
  },
};

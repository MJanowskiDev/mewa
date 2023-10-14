import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'UI/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _Button = () => <Button label="This is button component" />;

export const Default: Story = {
  args: {
    label: 'Hello',
    id: 'button-default',
  },
};

export const Primary: Story = {
  args: {
    label: crypto.randomUUID(),
    bgColor: 'amethyst',
    color: 'emerald',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Hello',
    bgColor: 'peter-river',
    color: 'amethyst',
  },
};

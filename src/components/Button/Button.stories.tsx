import { type Meta, type StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    onClick: console.log,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    outline: true,
    label: 'Button',
  },
};

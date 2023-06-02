import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    variant: 'filled',
    size: 'xs',
    children: 'Button Text',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    //👇 The args you need here will depend on your component
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    //👇 The args you need here will depend on your component
  },
};

export const outline: Story = {
  args: {
    variant: 'outline',
    //👇 The args you need here will depend on your component
  },
};

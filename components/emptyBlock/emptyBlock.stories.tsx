import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import EmptyBlock from './emptyBlock';

const meta: Meta<typeof EmptyBlock> = {
  title: 'EmptyBlock',
  component: EmptyBlock,
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof EmptyBlock>;

export const Filled: Story = {
  args: {},
};

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import FieldSet from './fieldSet';

const meta: Meta<typeof FieldSet> = {
  title: 'Form/FieldSet',
  component: FieldSet,
  args: {},
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof FieldSet>;

export const Default: Story = {
  args: {
    title: 'Profile',
  },
};

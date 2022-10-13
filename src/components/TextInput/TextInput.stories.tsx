import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';

import { TextInput, ITextInputRootProps } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Input placeholder" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ITextInputRootProps>;

export const Default = {} as StoryObj<ITextInputRootProps>;

export const WithoutIcon = {
  args: {
    children: <TextInput.Input placeholder="Input placeholder" />,
  },
} as StoryObj<ITextInputRootProps>;

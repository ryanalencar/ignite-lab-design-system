import { Meta, StoryObj } from '@storybook/react'
import { TextInput, ITextInputProps } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput,
  args: {
    children: 'TextInput Component'
  },
  argTypes: {}
} as Meta<ITextInputProps>

export const Default = {} as StoryObj<ITextInputProps>
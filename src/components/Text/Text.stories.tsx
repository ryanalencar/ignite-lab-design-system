import { Meta, StoryObj } from '@storybook/react'
import { ITextProps, Text } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum...',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
      description: 'Text size',
    },
    children: {
      description: 'Text children',
    }
  }
} as Meta<ITextProps>

export const Default = {
  args: { size: 'md' }
} as StoryObj<ITextProps>

export const Small = {
  args: { size: 'sm' }
} as StoryObj<ITextProps>

export const Large = {
  args: { size: 'lg' }
} as StoryObj<ITextProps>

export const CustomComponent = {
  args: {
    asChild: true,
    children: <p>Paragraph test</p>
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    asChild: {
      table: {
        disable: true,
      }
    }
  }
} as StoryObj<ITextProps>
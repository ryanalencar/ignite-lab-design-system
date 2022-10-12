import { Meta, StoryObj } from '@storybook/react'
import { Heading, IHeadingProps } from './Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum...',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
      description: 'Heading size',
    },
    children: {
      description: 'Heading children',
    }
  }
} as Meta<IHeadingProps>

export const Default = {
  args: { size: 'md' }
} as StoryObj<IHeadingProps>

export const Small = {
  args: { size: 'sm' }
} as StoryObj<IHeadingProps>

export const Large = {
  args: { size: 'lg' }
} as StoryObj<IHeadingProps>

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
} as StoryObj<IHeadingProps>
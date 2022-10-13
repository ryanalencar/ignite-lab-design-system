import { Meta, StoryObj } from '@storybook/react';

import { Text } from '../Text';
import { Checkbox, ICheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="flex items-center gap-2">
        {Story()}
        <Text>Aceito os termos de uso</Text>
      </div>
    ),
  ],
} as Meta<ICheckboxProps>;

export const Default = {} as StoryObj<ICheckboxProps>;

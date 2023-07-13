import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Select value',
    id: 'select',
    options: [
        { value: '12345', content: 'First option' },
        { value: '12345', content: 'Second option' },
        { value: '12345', content: 'Third option' },
        { value: '12345', content: 'Fourth option' },
    ],
};

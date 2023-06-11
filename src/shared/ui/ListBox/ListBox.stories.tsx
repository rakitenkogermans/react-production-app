import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const options = [
    {
        value: 'First',
        content: 'First',
    },
    {
        value: 'Second',
        content: 'Second',
    },
    {
        value: 'Third',
        content: 'Third',
    },
];

export const Normal = Template.bind({});
Normal.args = {
    value: options[0].value,
    items: options,
};

import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const options = [
    {
        value: 'First',
        content: 'First123',
    },
    {
        value: 'Second',
        content: 'Second123',
    },
    {
        value: 'Third',
        content: 'Third123',
    },
];

export const Normal = Template.bind({});
Normal.args = {
    value: options[0].value,
    items: options,
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
    value: options[0].value,
    items: options,
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right',
    value: options[0].value,
    items: options,
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
    value: options[0].value,
    items: options,
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right',
    value: options[0].value,
    items: options,
};

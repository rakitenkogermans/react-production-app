import React from 'react';

import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    decorators: [RouterDecorator({})],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: {
                id: '1',
                username: 'John',
            },
        },
        {
            id: '2',
            text: 'Comment 2',
            user: {
                id: '1',
                username: 'Jason',
            },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};

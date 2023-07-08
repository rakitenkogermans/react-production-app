import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    decorators: [RouterDecorator({})],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: {
            id: '1',
            username: 'Vasya',
        },
    },
};

export const Loading = Template.bind({});
Loading.args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: {
            id: '1',
            username: 'Vasya',
        },
    },
    isLoading: true,
};

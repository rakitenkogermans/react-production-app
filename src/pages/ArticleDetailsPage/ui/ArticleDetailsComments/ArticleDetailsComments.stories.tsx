import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ArticleDetailsComments } from './ArticleDetailsComments';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    decorators: [SuspenseDecorator],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
    <ArticleDetailsComments {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

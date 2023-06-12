import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ArticleEditForm } from './ArticleEditForm';

export default {
    title: 'features/articleEditForm/ArticleEditForm',
    component: ArticleEditForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEditForm>;

const Template: ComponentStory<typeof ArticleEditForm> = (args) => <ArticleEditForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

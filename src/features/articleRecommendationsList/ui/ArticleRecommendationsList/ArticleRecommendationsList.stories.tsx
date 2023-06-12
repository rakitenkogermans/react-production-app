import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
    title: 'features/articleRecommendationsList/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
    <ArticleRecommendationsList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

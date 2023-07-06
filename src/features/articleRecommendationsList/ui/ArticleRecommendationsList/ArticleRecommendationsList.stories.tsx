import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { type Article, ArticleType } from 'entities/Article';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: "What's new in JS for 2022?",
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1546,
    createdAt: '26.02.2023',
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg',
    },
    type: [ArticleType.IT],
    blocks: [],
};

export default {
    title: 'features/articleRecommendationsList/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    decorators: [RouterDecorator({})],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=6`,
                method: 'GET',
                status: 200,
                response: [
                    ...new Array(9).fill(0).map((item, index) => ({
                        ...article,
                        id: String(index),
                    })),
                ],
            },
        ],
    },
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
    <ArticleRecommendationsList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

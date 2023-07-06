import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ArticleList } from './ArticleList';
import { type Article } from '../../model/types/article';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { ArticleType, ArticleView } from '../../model/consts/articleConsts';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    decorators: [RouterDecorator({})],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

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

export const LoadingList = Template.bind({});
LoadingList.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.LIST,
};

export const LoadingGrid = Template.bind({});
LoadingGrid.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.GRID,
};

export const Grid = Template.bind({});
Grid.args = {
    articles: new Array(9).fill(0).map((item, index) => ({
        ...article,
        id: String(index),
    })),
    isLoading: false,
    view: ArticleView.GRID,
};

export const List = Template.bind({});
List.args = {
    articles: new Array(9).fill(0).map((item, index) => ({
        ...article,
        id: String(index),
    })),
    isLoading: false,
    view: ArticleView.LIST,
};

import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import ArticleEditPage from './ArticleEditPage';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
    decorators: [RouterDecorator({}), StoreDecorator({})],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

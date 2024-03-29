import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEME } from '@/shared/const/theme';

import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [
        RouterDecorator({
            route: '/profile/1',
            path: '/profile/:id',
        }),
    ],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 23,
                country: Country.Latvia,
                currency: Currency.EUR,
                firstname: 'qwerty',
                lastname: 'qwerty',
                city: 'Riga',
                avatar: 'assets/storybook.jpg',
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(THEME.DARK),
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 23,
                country: Country.Latvia,
                currency: Currency.EUR,
                firstname: 'qwerty',
                lastname: 'qwerty',
                city: 'Riga',
                avatar: 'assets/storybook.jpg',
            },
        },
    }),
];

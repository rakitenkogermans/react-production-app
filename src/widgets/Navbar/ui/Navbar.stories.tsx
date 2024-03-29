import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEME } from '@/shared/const/theme';

import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    decorators: [RouterDecorator({})],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const LoggedInLight = Template.bind({});
LoggedInLight.args = {};
LoggedInLight.decorators = [
    StoreDecorator({
        user: {
            authData: {
                username: 'qwerty',
                id: '1',
            },
        },
    }),
];

export const LoggedInDark = Template.bind({});
LoggedInDark.args = {};
LoggedInDark.decorators = [
    ThemeDecorator(THEME.DARK),
    StoreDecorator({
        user: {
            authData: {
                username: 'qwerty',
                id: '1',
            },
        },
    }),
];

export const LoggedOutLight = Template.bind({});
LoggedOutLight.args = {};
LoggedOutLight.decorators = [
    StoreDecorator({
        user: { authData: undefined },
    }),
];

export const LoggedOutDark = Template.bind({});
LoggedOutDark.args = {};
LoggedOutDark.decorators = [
    ThemeDecorator(THEME.DARK),
    StoreDecorator({
        user: { authData: undefined },
    }),
];

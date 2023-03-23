import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const LoggedInLight = Template.bind({});
LoggedInLight.args = {};
LoggedInLight.decorators = [StoreDecorator({
    user: { authData: { username: 'qwerty', id: '1' } },
})];

export const LoggedInDark = Template.bind({});
LoggedInDark.args = {};
LoggedInDark.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({
    user: { authData: { username: 'qwerty', id: '1' } },
})];

export const LoggedOutLight = Template.bind({});
LoggedOutLight.args = {};
LoggedOutLight.decorators = [StoreDecorator({
    user: { authData: undefined },
})];

export const LoggedOutDark = Template.bind({});
LoggedOutDark.args = {};
LoggedOutDark.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({
    user: { authData: undefined },
})];

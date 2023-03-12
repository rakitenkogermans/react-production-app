import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import { ProfilePage } from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/storybook.jpg';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = ([StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 23,
            country: Country.Latvia,
            currency: Currency.EUR,
            firstname: 'qwerty',
            lastname: 'qwerty',
            city: 'Riga',
            avatar: AvatarImg
        }
    }
})]);

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = ([ThemeDecorator(THEME.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 23,
            country: Country.Latvia,
            currency: Currency.EUR,
            firstname: 'qwerty',
            lastname: 'qwerty',
            city: 'Riga',
            avatar: AvatarImg
        }
    }
})]);

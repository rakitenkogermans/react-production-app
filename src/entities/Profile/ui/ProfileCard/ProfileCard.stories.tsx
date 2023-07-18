import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 23,
        country: Country.Latvia,
        currency: Currency.EUR,
        firstname: 'qwerty',
        lastname: 'qwerty',
        city: 'Riga',
        avatar: 'assets/storybook.jpg',
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ProfileRating } from './ProfileRating';

export default {
    title: 'shared/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

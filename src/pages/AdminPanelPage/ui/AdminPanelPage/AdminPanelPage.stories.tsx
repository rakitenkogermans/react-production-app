import React from 'react';

import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import AdminPanelPage from './AdminPanelPage';

export default {
    title: 'pages/ForbiddenPage',
    component: AdminPanelPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = (args) => <AdminPanelPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

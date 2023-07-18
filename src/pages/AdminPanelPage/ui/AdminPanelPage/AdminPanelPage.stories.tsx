import type { Meta, StoryObj } from '@storybook/react';

import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import AdminPanelPage from './AdminPanelPage';

const meta: Meta<typeof AdminPanelPage> = {
    component: AdminPanelPage,
    decorators: [RouterDecorator({})],
};
export default meta;

type Story = StoryObj<typeof AdminPanelPage>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};

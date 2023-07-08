import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Text, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEME } from '@/app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum',
    text: 'Description lorem ipsum lorem ipsum',
};

export const PrimaryError = Template.bind({});
PrimaryError.args = {
    title: 'Title lorem ipsum',
    text: 'Description lorem ipsum lorem ipsum',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem ipsum',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Description lorem ipsum lorem ipsum',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem ipsum',
    text: 'Description lorem ipsum lorem ipsum',
};
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)];

export const PrimaryDarkError = Template.bind({});
PrimaryDarkError.args = {
    title: 'Title lorem ipsum',
    text: 'Description lorem ipsum lorem ipsum',
    theme: TextTheme.ERROR,
};
PrimaryDarkError.decorators = [ThemeDecorator(THEME.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title lorem ipsum',
};
onlyTitleDark.decorators = [ThemeDecorator(THEME.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Description lorem ipsum lorem ipsum',
};
onlyTextDark.decorators = [ThemeDecorator(THEME.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title lorem ipsum',
    text: 'Description lorem ipsum lorem ipsum',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title lorem ipsum',
    text: 'Description lorem ipsum lorem ipsum',
    size: TextSize.M,
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title lorem ipsum',
    text: 'Description lorem ipsum lorem ipsum',
    size: TextSize.S,
};

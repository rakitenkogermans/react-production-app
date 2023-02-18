import { type Story } from '@storybook/react';
import { type THEME } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: THEME) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent/>
    </div>
);

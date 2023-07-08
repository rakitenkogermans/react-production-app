import { type Story } from '@storybook/react';
import { type THEME, ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: THEME) => (StoryComponent: Story) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );

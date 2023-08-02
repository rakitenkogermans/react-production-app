import { type Story } from '@storybook/react';

import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { type THEME } from '@/shared/const/theme';

export const ThemeDecorator = (theme: THEME) => (StoryComponent: Story) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );

import { createContext } from 'react';

export enum THEME {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
    YELLOW = 'app_yellow_theme',
}

export interface ThemeContextProps {
    theme?: THEME
    setTheme?: (theme: THEME) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

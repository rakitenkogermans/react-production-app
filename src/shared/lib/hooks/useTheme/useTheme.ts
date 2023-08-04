import { useContext } from 'react';

import { THEME } from '../../../const/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface UseThemeReturn {
    theme: THEME;
    toggleTheme: (saveAction?: (theme: THEME) => void) => void;
}

export const useTheme = (): UseThemeReturn => {
    const { theme = THEME.LIGHT, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction?: (theme: THEME) => void) => {
        let newTheme: THEME;

        if (theme === THEME.DARK) {
            newTheme = THEME.LIGHT;
        } else if (theme === THEME.LIGHT) {
            newTheme = THEME.YELLOW;
        } else if (theme === THEME.YELLOW) {
            newTheme = THEME.DARK;
        } else {
            newTheme = THEME.LIGHT;
        }

        setTheme?.(newTheme);

        saveAction?.(newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};

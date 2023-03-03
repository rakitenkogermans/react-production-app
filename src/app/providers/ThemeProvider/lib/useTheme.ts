import { useContext } from 'react';
import {
    THEME,
    ThemeContext
} from 'app/providers/ThemeProvider/lib/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from 'shared/const/localstorage';

interface UseThemeReturn {
    theme: THEME
    toggleTheme: () => void
}

export const useTheme = (): UseThemeReturn => {
    const { theme = THEME.LIGHT, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
        if (setTheme) {
            setTheme(newTheme);
        }
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme
    };
};

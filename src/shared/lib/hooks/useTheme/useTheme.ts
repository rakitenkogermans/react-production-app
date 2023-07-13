import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localstorage';
import { THEME } from '../../../const/theme';

interface UseThemeReturn {
    theme: THEME;
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeReturn => {
    const { theme = THEME.LIGHT, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
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

        if (setTheme) {
            setTheme(newTheme);
        }
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};

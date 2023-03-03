import { type FC, type ReactNode, useMemo, useState } from 'react';
import { THEME, ThemeContext } from '../lib/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from 'shared/const/localstorage';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.LIGHT;

interface ThemeProviderProps {
    children?: ReactNode
    initialTheme?: THEME
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<THEME>(initialTheme ?? defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider };

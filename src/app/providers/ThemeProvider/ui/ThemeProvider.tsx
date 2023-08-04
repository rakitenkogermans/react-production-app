import { type ReactNode, useEffect, useMemo, useState } from 'react';

import { useJsonSettings } from '@/entities/User';
import { THEME } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: THEME;
}

const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
    const { theme: defaultTheme = THEME.LIGHT } = useJsonSettings();
    const [theme, setTheme] = useState<THEME>(initialTheme ?? defaultTheme);
    const [isThemeInited, setIsThemeInited] = useState(false);

    useEffect(() => {
        if (!isThemeInited) {
            setTheme(defaultTheme);
            setIsThemeInited(true);
        }
    }, [defaultTheme, isThemeInited]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };

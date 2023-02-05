import {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './ThemeSwitcher.module.scss';
import {THEME, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import {Button, ThemeButton} from "shared/ui/Button/Button";

type ThemeSwitcherProps = {
    className?: string;
};

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === THEME.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};

export { ThemeSwitcher };

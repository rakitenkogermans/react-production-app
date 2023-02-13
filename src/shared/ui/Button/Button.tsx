import { type ButtonHTMLAttributes, type FC, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    LANG = 'lang'
}

type ButtonProps = {
    className?: string
    theme?: ThemeButton
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    const { className = '', children, theme = ThemeButton.CLEAR, ...otherProps } = props;
    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export { Button };

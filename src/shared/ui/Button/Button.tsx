import { type ButtonHTMLAttributes, type FC, memo, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

type ButtonProps = {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = memo((props: PropsWithChildren<ButtonProps>) => {
    const {
        className = '',
        children,
        theme = ButtonTheme.CLEAR,
        square = false,
        size = ButtonSize.M,
        disabled = false,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});

export { Button };

import {ButtonHTMLAttributes, FC, PropsWithChildren} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear'
}

type ButtonProps = {
    className?: string;
    theme?: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    const {className, children, theme, ...otherProps} = props;
    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export { Button };

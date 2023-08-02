import {
    type ChangeEvent,
    type InputHTMLAttributes,
    memo,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

import { classNames, type Mods } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readonly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    label?: string;
    autoFocus?: boolean;
    readonly?: boolean;
}

const Input = memo((props: InputProps) => {
    const {
        className = '',
        value,
        onChange,
        type = 'text',
        placeholder,
        label,
        id,
        name,
        autoFocus,
        readonly,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const isCaretVisible = isFocused && !readonly;

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    const onFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const onSelect = useCallback((e: any) => {
        const inputWidth = inputRef.current?.offsetWidth;
        let caretPos = 0;
        const selectionStart = e?.target?.selectionStart;
        if (selectionStart && inputWidth) {
            caretPos =
                selectionStart * 9 <= inputWidth ? selectionStart : Math.round(inputWidth / 9);
        }
        setCaretPosition(caretPos);
    }, []);

    let template = (
        <div className={cls.caretWrapper}>
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeHandler}
                type={type}
                id={id}
                name={name}
                className={cls.input}
                onFocus={onFocus}
                onBlur={onBlur}
                onSelect={onSelect}
                readOnly={readonly}
                {...otherProps}
            />
            {isCaretVisible && (
                <span
                    className={cls.caret}
                    style={{ left: `${caretPosition * 9}px` }}
                />
            )}
        </div>
    );

    if (label) {
        template = (
            <>
                <div className={cls.labelWrapper}>
                    <label htmlFor={id}>{`${label}>`}</label>
                </div>
                {template}
            </>
        );
    }

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return <div className={classNames(cls.InputWrapper, mods, [className])}>{template}</div>;
});

export { Input };

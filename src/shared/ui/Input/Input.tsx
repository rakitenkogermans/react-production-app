import {
    type ChangeEvent,
    type InputHTMLAttributes,
    memo, useCallback,
    useEffect,
    useRef,
    useState
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    label?: string
    autoFocus?: boolean
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
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

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
                (selectionStart * 9) <= inputWidth
                    ? selectionStart
                    : Math.round(inputWidth / 9);
        }
        setCaretPosition(caretPos);
    }, []);

    let template =
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
                {...otherProps}
            />
            {isFocused && <span
                className={cls.caret}
                style={{ left: `${caretPosition * 9}px` }}
            />}
        </div>;

    if (label) {
        template =
            <>
                <div className={cls.labelWrapper}>
                    <label htmlFor={id}>
                        {`${label}>`}
                    </label>
                </div>
                {template}
            </>;
    }

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {template}
        </div>
    );
});

export { Input };

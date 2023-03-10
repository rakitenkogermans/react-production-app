import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { type ChangeEvent, memo, useMemo } from 'react';

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    id?: string
    name?: string
    value?: string
    options?: SelectOption[]
    onChange?: (value: string) => void
    readonly?: boolean
}

const Select = memo(({ className, label, id, name, value, options, readonly, onChange }: SelectProps) => {
    const mods: Mods = {};

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <option
                key={opt.value}
                className={cls.option}
                value={opt.value}
            >
                {opt.content}
            </option>
        ));
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <label
                    className={cls.label}
                    htmlFor={id}
                >
                    {`${label}>`}
                </label>
            )}
            <select
                disabled={readonly}
                name={name}
                id={id}
                value={value}
                className={cls.select}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
});

export { Select };

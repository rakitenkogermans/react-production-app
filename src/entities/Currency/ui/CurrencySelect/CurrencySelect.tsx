import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
    id?: string;
}

const options = [
    {
        value: Currency.EUR,
        content: Currency.EUR,
    },
    {
        value: Currency.USD,
        content: Currency.USD,
    },
    {
        value: Currency.LTL,
        content: Currency.LTL,
    },
];

const CurrencySelect = memo(({ className, value, onChange, readonly, id }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    return (
        <ListBox
            className={classNames('', {}, [className])}
            label={t('Select currency') ?? ''}
            defaultValue={t('Select currency') ?? ''}
            onChange={onChangeHandler}
            value={value}
            items={options}
            readonly={readonly}
        />
    );

    // return (
    //     <Select
    //         label={t('Select currency') ?? ''}
    //         options={options}
    //         value={value}
    //         onChange={onChangeHandler}
    //         className={classNames('', {}, [className])}
    //         readonly={readonly}
    //         id={id}
    //     />
    // );
});

export { CurrencySelect };

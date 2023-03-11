import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
    id?: string
}

const options = [
    { value: Country.Austria, content: Country.Austria },
    { value: Country.Belgium, content: Country.Belgium },
    { value: Country.Estonia, content: Country.Estonia },
    { value: Country.Latvia, content: Country.Latvia },
    { value: Country.Lithuania, content: Country.Lithuania }
];

const CountrySelect = memo(({ className, value, onChange, readonly, id }: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            label={t('Select country') ?? ''}
            options={options}
            value={value}
            onChange={onChangeHandler}
            className={classNames('', {}, [className])}
            readonly={readonly}
            id={id}
        />
    );
});

export { CountrySelect };

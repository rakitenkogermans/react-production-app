import { classNames } from 'shared/lib/classNames/classNames';
import { Country } from '../../model/types/country';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
    id?: string;
}

const options = [
    {
        value: Country.Austria,
        content: Country.Austria,
    },
    {
        value: Country.Belgium,
        content: Country.Belgium,
    },
    {
        value: Country.Estonia,
        content: Country.Estonia,
    },
    {
        value: Country.Latvia,
        content: Country.Latvia,
    },
    {
        value: Country.Lithuania,
        content: Country.Lithuania,
    },
];

const CountrySelect = memo(({ className, value, onChange, readonly, id }: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <ListBox
            className={classNames('', {}, [className])}
            label={t('Select country') ?? ''}
            defaultValue={t('Select country') ?? ''}
            onChange={onChangeHandler}
            value={value}
            items={options}
            readonly={readonly}
            direction={'top right'}
        />
    );

    // return (
    //     <Select
    //         label={t('Select country') ?? ''}
    //         options={options}
    //         value={value}
    //         onChange={onChangeHandler}
    //         className={classNames('', {}, [className])}
    //         readonly={readonly}
    //         id={id}
    //     />
    // );
});

export { CountrySelect };

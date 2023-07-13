import { useTranslation } from 'react-i18next';

import { type Country, CountrySelect } from '@/entities/Country';
import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';

import cls from './ProfileCard.module.scss';
import { type Currency, CurrencySelect } from '../../../Currency';
import { type Profile } from '../../model/types/profile';


interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (value: Country) => void;
}

const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeLastname,
        onChangeFirstname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack
                justify={'center'}
                max
                className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                justify={'center'}
                max
                className={classNames(cls.ProfileCard, {}, [className, cls.error])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Something went wrong while loading Profile') ?? ''}
                    text={t('Try again later') ?? ''}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            gap={'16'}
            align={'start'}
            max
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            {data?.avatar && (
                <HStack
                    justify={'center'}
                    max
                >
                    <Avatar src={data?.avatar} />
                </HStack>
            )}
            <Input
                value={data?.firstname}
                label={t('Your name') ?? ''}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                id={'firstname'}
                data-testid={'ProfileCard.firstname'}
            />
            <Input
                value={data?.lastname}
                label={t('Your lastname') ?? ''}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                id={'lastname'}
                data-testid={'ProfileCard.lastname'}
            />
            <Input
                value={data?.age}
                label={t('Your age') ?? ''}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
                id={'age'}
                data-testid={'ProfileCard.age'}
            />
            <Input
                value={data?.city}
                label={t('Your city') ?? ''}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
                id={'city'}
                data-testid={'ProfileCard.city'}
            />
            <Input
                value={data?.username}
                label={t('Type Username') ?? ''}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
                id={'username'}
                data-testid={'ProfileCard.username'}
            />
            <Input
                value={data?.avatar}
                label={t('Avatar link') ?? ''}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
                id={'avatar'}
                data-testid={'ProfileCard.avatar'}
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
                id={'currency'}
                data-testid={'ProfileCard.currency'}
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
                id={'country'}
                data-testid={'ProfileCard.country'}
            />
        </VStack>
    );
};

export { ProfileCard };

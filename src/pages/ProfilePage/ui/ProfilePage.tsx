import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useEffect } from 'react';
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
    ValidateProfileError,
} from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { type Currency } from 'entities/Currency';
import { type Country } from 'entities/Country/model/types/country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className = '' }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const isLoading = useSelector(getProfileIsLoading);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Server error while saving'),
        [ValidateProfileError.NO_DATA]: t('Data is not specified'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Firstname and lastname is required'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
    };

    useInitialEffect(() => {
        if (id) {
            void dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ firstname: value ?? '' }));
        },
        [dispatch],
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value ?? '' }));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value: string = '') => {
            const maxCharLen = 2;
            const regexp = /^\d+$/gs;

            if (value.length > maxCharLen) {
                value = value.slice(0, maxCharLen);
            }
            if (!regexp.test(value) && value !== '') {
                return;
            }

            dispatch(profileActions.updateProfile({ age: +value }));
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value ?? '' }));
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value ?? '' }));
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value ?? '' }));
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch],
    );

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames('', {}, [className])}>
                <VStack
                    max={true}
                    gap={'16'}
                >
                    <ProfilePageHeader />
                    {validateErrors?.length &&
                        validateErrors.map((err) => (
                            <Text
                                key={err}
                                theme={TextTheme.ERROR}
                                text={validateErrorTranslates[err]}
                            />
                        ))}
                    <ProfileCard
                        data={formData}
                        isLoading={isLoading}
                        error={error}
                        readonly={readonly}
                        onChangeFirstname={onChangeFirstname}
                        onChangeLastname={onChangeLastname}
                        onChangeAge={onChangeAge}
                        onChangeCity={onChangeCity}
                        onChangeUsername={onChangeUsername}
                        onChangeAvatar={onChangeAvatar}
                        onChangeCurrency={onChangeCurrency}
                        onChangeCountry={onChangeCountry}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;

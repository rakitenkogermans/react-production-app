import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileData, profileActions, updateProfileData } from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';

interface ProfilePageHeaderProps {
    className?: string;
}

const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        void dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack
            max={true}
            justify={'between'}
            className={classNames('', {}, [className])}
        >
            <Text title={t('Profile') ?? ''} />
            <HStack gap={'16'}>
                {canEdit && (
                    <>
                        {readonly ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                            >
                                {t('Edit')}
                            </Button>
                        ) : (
                            <>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                >
                                    {t('Save')}
                                </Button>
                            </>
                        )}
                    </>
                )}
            </HStack>
        </HStack>
    );
};

export { ProfilePageHeader };

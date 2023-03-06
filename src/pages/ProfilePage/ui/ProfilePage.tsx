import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';

const reducers: ReducersList = {
    profile: profileReducer
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(({ className = '' }: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={true}
        >
            <div className={classNames('', {}, [className])}>
                {t('ProfilePage')}
            </div>
        </DynamicModuleLoader>
    );
});

export { ProfilePage };

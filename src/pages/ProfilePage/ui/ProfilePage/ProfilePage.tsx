import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/editableProfileCard';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className = '' }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');

    if (!id) {
        return (
            <Page
                data-testid={'ProfilePage'}
                className={classNames('', {}, [className])}
            >
                {t('Profile not found')}
            </Page>
        );
    }

    return (
        <Page
            data-testid={'ProfilePage'}
            className={classNames('', {}, [className])}
        >
            <VStack
                max={true}
                gap={'16'}
            >
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
});

export default ProfilePage;

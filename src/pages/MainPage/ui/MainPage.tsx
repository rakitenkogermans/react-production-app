import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page/Page';
import { RatingCard } from '@/entities/Rating';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    return (
        <Page>
            {t('Main page')}
            <RatingCard
                title={t('Please, rate this article!') ?? ''}
                feedbackTitle={t('Leave a feedback about article') ?? ''}
                hasFeedback
            />
        </Page>
    );
});

export default MainPage;

import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';

const AboutPage = memo(() => {
    const { t } = useTranslation('about');
    return (
        <Page>
            {t('About us')}
        </Page>
    );
});

export default AboutPage;

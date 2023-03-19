import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const AboutPage = memo(() => {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('About us')}
        </div>
    );
});

export default AboutPage;

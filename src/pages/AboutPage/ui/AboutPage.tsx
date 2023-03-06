import { useTranslation } from 'react-i18next';
import { type FC, memo } from 'react';

const AboutPage: FC = memo(() => {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('About us')}
        </div>
    );
});

export { AboutPage };

import { useTranslation } from 'react-i18next';
import { type FC } from 'react';

const AboutPage: FC = () => {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('about_About us')}
        </div>
    );
};

export { AboutPage };

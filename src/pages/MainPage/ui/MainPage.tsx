import { useTranslation } from 'react-i18next';
import { type FC } from 'react';

const MainPage: FC = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('main_Main page')}
        </div>
    );
};

export { MainPage };

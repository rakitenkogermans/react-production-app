import { useTranslation } from 'react-i18next';
import { type FC, memo } from 'react';

const MainPage: FC = memo(() => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('Main page')}
        </div>
    );
});

export { MainPage };

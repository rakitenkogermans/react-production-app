import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    return <Page>{t('Main page')}</Page>;
});

export default MainPage;

import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    return (
        <Page>
            <Counter />
            {t('Main page')}
        </Page>
    );
});

export default MainPage;

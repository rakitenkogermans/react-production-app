import {FC} from 'react';
import {useTranslation} from "react-i18next";

type MainPageProps = {};

const MainPage: FC<MainPageProps> = () => {
    const {t} = useTranslation('main');
    return (
        <div>
            {t('Main page')}
        </div>
    );
};

export {MainPage};

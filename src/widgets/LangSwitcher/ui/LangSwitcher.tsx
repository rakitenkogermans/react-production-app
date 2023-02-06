import {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './LangSwitcher.module.scss';
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

type LangSwitcherProps = {
    className?: string;
};

const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'lv' : 'en');
    }

    return (
        <Button
            theme={ThemeButton.LANG}
            onClick={toggle}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            {t('Language')}
        </Button>
    );
};

export { LangSwitcher };

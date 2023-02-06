import {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

type NavbarProps = {
    className?: string;
};

const Navbar: FC<NavbarProps> = ({className}) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={"/"}>{t('Main')}</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>{t('About')}</AppLink>
            </div>
        </div>
    );
};

export {Navbar};

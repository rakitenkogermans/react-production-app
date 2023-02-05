import {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

type NavbarProps = {
    className?: string;
};

const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={"/"}>Main</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>About</AppLink>
            </div>
        </div>
    );
};

export {Navbar};

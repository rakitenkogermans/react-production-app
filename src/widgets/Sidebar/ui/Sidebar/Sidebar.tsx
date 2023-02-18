import { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
    className?: string
}

const Sidebar: FC<SidebarProps> = ({ className = '' }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed(prevState => !prevState);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button data-testid="sidebar-toggle" type={'button'} onClick={onToggle}>{t('Toggle')}</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};

export { Sidebar };

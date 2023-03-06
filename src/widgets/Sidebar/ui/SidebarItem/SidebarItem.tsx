import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { type SidebarItemType } from 'widgets/Sidebar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    return (
        <AppLink
            theme={AppLinkTheme.PRIMARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});

export { SidebarItem };

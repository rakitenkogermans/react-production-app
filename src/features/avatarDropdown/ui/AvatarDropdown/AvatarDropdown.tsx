import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AvatarDropdown.module.scss';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Dropdown } from 'shared/ui/Popups';
import { useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';

interface AvatarDropdownProps {
    className?: string;
}

const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            direction={'bottom left'}
            className={classNames(cls.AvatarDropdown, {}, [className, cls.dropdown])}
            items={[
                ...(isAdminPanelAvailable
                    ? [
                          {
                              content: t('Admin'),
                              href: RoutePath.admin_panel,
                          },
                      ]
                    : []),
                {
                    content: t('Profile'),
                    href: RoutePath.profile + authData.id,
                },
                {
                    content: t('Logout'),
                    onClick: onLogout,
                },
            ]}
            trigger={
                <Avatar
                    size={30}
                    src={authData.avatar}
                />
            }
        ></Dropdown>
    );
});

export { AvatarDropdown };

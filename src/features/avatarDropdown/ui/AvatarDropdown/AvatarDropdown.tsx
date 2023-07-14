import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';

import cls from './AvatarDropdown.module.scss';

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
                              href: getRouteAdminPanel(),
                          },
                      ]
                    : []),
                {
                    content: t('Profile'),
                    href: getRouteProfile(authData.id),
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

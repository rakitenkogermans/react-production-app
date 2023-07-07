import { memo } from 'react';
import cls from './NotificationButton.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';

interface NotificationButtonProps {
    className?: string;
}

const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <Popover
            direction={'bottom left'}
            trigger={
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} />
                </Button>
            }
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});

export { NotificationButton };

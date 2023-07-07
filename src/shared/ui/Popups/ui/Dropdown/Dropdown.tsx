import { Fragment, memo, type ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import { Menu } from '@headlessui/react';
import { type DropDownDirection } from 'shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import pCls from '../../styles/popup.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropDownDirection;
}

const Dropdown = memo((props: DropdownProps) => {
    const { className, trigger, items, direction = 'bottom right' } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu
            as={'div'}
            className={classNames(cls.Dropdown, {}, [className, pCls.popup])}
        >
            <Menu.Button className={pCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type={'button'}
                            onClick={item.onClick}
                            disabled={item.disabled}
                            className={classNames(cls.item, { [pCls.active]: active })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                key={index}
                                disabled={item.disabled}
                                as={AppLink}
                                to={item.href}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            key={index}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});

export { Dropdown };

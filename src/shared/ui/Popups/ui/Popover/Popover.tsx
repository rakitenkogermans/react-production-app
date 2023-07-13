import { type ReactNode } from 'react';

import { Popover as HPopover } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Popover.module.scss';
import { type DropDownDirection } from '../../../../types/ui';
import { mapDirectionClass } from '../../styles/consts';
import pCls from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropDownDirection;
    children: ReactNode;
}

const Popover = (props: PopoverProps) => {
    const { className, trigger, direction = 'bottom right', children } = props;

    const popoverClasses = [mapDirectionClass[direction]];

    return (
        <HPopover className={classNames(cls.Popover, {}, [className, pCls.popup])}>
            <HPopover.Button
                as={'div'}
                className={pCls.trigger}
            >
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, popoverClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};

export { Popover };

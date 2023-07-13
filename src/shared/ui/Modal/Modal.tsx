import { type FC, type ReactNode } from 'react';
import { classNames, type Mods } from '../../lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from '../../lib/hooks/useModal/useModal';
import { useTheme } from '../../lib/hooks/useTheme/useTheme';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const { close, isClosing, isRenderModal, isMounted } = useModal({
        animationDelay: 300,
        isOpen,
        onClose,
    });
    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isRenderModal,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};

export { Modal };

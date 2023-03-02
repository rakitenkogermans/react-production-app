import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

const LoginModal: FC<LoginModalProps> = ({ className = '', isOpen, onClose }) => {
    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy={true}
        >
            <LoginForm />
        </Modal>
    );
};

export { LoginModal };

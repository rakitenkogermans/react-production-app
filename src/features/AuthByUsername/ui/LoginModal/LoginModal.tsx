import { type FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

const LoginModal: FC<LoginModalProps> = ({ className = '', isOpen, onClose }) => {
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy={true}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormLazy onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};

export { LoginModal };

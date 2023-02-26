import { type FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({ className = '' }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Login')}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            >
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                    'Atque delectus distinctio eaque eius exercitationem laudantium perspiciatis ' +
                    'quibusdam saepe sapiente veritatis.')}
            </Modal>
        </div>
    );
};

export { Navbar };

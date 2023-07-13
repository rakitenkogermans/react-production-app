import { type FC } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const PageError: FC<PageErrorProps> = ({ className = '' }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Something went wrong')}</p>
            <Button onClick={reloadPage}>{t('Reload page')}</Button>
        </div>
    );
};

export { PageError };

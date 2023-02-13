import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

const Loader: FC<LoaderProps> = ({ className = '' }) => {
    return (
        <span className={classNames(cls.loader)}></span>
    );
};

export { Loader };

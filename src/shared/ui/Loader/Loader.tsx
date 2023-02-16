import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string
}

const Loader: FC<LoaderProps> = ({ className = '' }) => {
    return (
        <span className={classNames('loader')}></span>
    );
};

export { Loader };

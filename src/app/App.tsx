import { type FC, Suspense, useEffect } from 'react';

import './styles/index.scss';
import { useSelector } from 'react-redux';

import { getUserInitialized, initAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { PageLoader } from '@/widgets/PageLoader';

import { AppRouter } from './providers/router';

const App: FC = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const initialized = useSelector(getUserInitialized);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!initialized) {
        return <PageLoader />;
    }

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">{initialized && <AppRouter />}</Suspense>
        </div>
    );
};

export { App };

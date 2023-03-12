import { type FC, Suspense, useEffect } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserInitialized, userActions } from 'entities/User';
import { useSelector } from 'react-redux';

const App: FC = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const initialized = useSelector(getUserInitialized);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                {initialized && <AppRouter />}
            </Suspense>
        </div>
    );
};

export { App };

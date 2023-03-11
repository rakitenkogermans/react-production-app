import { type ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserAuthData } from 'entities/User';

interface ProtectRouteProps {
    className?: string
    authOnly?: boolean
    children?: ReactNode
}

const ProtectRoute = ({ className, authOnly, children }: ProtectRouteProps) => {
    const isAuth = useSelector(getUserAuthData);

    if (!isAuth && authOnly) {
        return <Navigate
            to="/"
            replace={true}
        />;
    }

    return (
        <div className="page-wrapper">
            {children}
        </div>
    );
};

export { ProtectRoute };

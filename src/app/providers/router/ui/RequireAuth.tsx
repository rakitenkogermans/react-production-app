import { useMemo } from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getUserAuthData, getUserRoles } from '@/entities/User';
import { type UserRole } from '@/entities/User';
import { getRouteForbidden, getRouteMain } from '@/shared/const/router';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

const RequireAuth = ({ children, roles }: RequireAuthProps) => {
    const isAuth = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => userRoles?.includes(requiredRole));
    }, [roles, userRoles]);

    if (!isAuth) {
        return (
            <Navigate
                to={getRouteMain()}
                replace={true}
            />
        );
    }

    if (!hasRequiredRoles) {
        return (
            <Navigate
                to={getRouteForbidden()}
                replace={true}
            />
        );
    }

    return children;
};

export { RequireAuth };

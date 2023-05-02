import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    children: JSX.Element;
}

const RequireAuth = ({ children }: RequireAuthProps) => {
    const isAuth = useSelector(getUserAuthData);

    if (!isAuth) {
        return (
            <Navigate
                to={RoutePath.main}
                replace={true}
            />
        );
    }

    return children;
};

export { RequireAuth };

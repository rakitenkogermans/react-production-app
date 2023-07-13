import { Suspense } from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import { Layout } from '../../../Layout';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { routeConfig } from '../config/routeConfig';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            {Object.values(routeConfig).map(({ element, path, authOnly, roles }) => {
                const el = <Suspense fallback={<PageLoader />}>{element}</Suspense>;

                return (
                    <Route
                        key={path}
                        path={path}
                        element={authOnly ? <RequireAuth roles={roles}>{el}</RequireAuth> : el}
                    />
                );
            })}
        </Route>,
    ),
);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export { AppRouter };

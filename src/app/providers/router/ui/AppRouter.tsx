import { Suspense } from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom';
import { Layout } from 'app/Layout';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            {Object.values(routeConfig).map(({ element, path, authOnly }) => {
                const el = (
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">
                            {element}
                        </div>
                    </Suspense>
                );

                return <Route
                    key={path}
                    path={path}
                    element={
                        authOnly ? <RequireAuth>{el}</RequireAuth> : el
                    }
                />;
            })}
        </Route>
    )
);

const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    );
};

export { AppRouter };

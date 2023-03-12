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
import { ProtectRoute } from 'app/providers/router/ui/ProtectRoute';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            {Object.values(routeConfig).map(({ element, path, authOnly }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <ProtectRoute authOnly={authOnly}>
                                {element}
                            </ProtectRoute>
                        </Suspense>
                    }
                />
            ))}
        </Route>
    )
);

const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    );
};

export { AppRouter };

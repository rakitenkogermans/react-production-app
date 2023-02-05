import {FC, Suspense} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {Layout} from "app/Layout";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            {Object.values(routeConfig).map(({element, path}) => (
                <Route key={path} path={path} element={<Suspense fallback={<div>Loading...</div>}>
                    {element}
                </Suspense>} />
            ))}
        </Route>
    )
);

type AppRoutesProps = {};

const AppRouter: FC<AppRoutesProps> = () => {
    return (
        <RouterProvider router={router} />
    );
};

export {AppRouter};

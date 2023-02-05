import {FC, Suspense} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {Root} from "app/Root";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Root />}>
            {Object.values(routeConfig).map(({element, path}) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Route>
    )
);

type AppRoutesProps = {};

const AppRouter: FC<AppRoutesProps> = () => {
    return (

            <Suspense fallback={<div>Loading...</div>}>
                <RouterProvider router={router} />
            </Suspense>
    );
};

export {AppRouter};

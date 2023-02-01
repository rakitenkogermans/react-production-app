import {FC, Suspense} from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {Root} from "./Root";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";

const router = createBrowserRouter(
    createRoutesFromElements(

            <Route path="/" element={<Root />}>
                <Route index element={<MainPageLazy/>}/>
                <Route path="/about" element={<AboutPageLazy/>}/>
            </Route>

    ));

type AppProps = {};

const App: FC<AppProps> = () => {
    return (
        <div className="app">
            <Suspense fallback={<div>Loading...</div>}>
                <RouterProvider router={router} />
            </Suspense>
        </div>
    );
};

export {App};

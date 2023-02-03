import {FC, Suspense} from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {Root} from "./Root";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const router = createBrowserRouter(
    createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<MainPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Route>
    ));

const App: FC = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <RouterProvider router={router} />
            </Suspense>
        </div>
    );
};

export {App};

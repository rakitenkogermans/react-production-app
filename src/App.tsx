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
import './styles/index.scss';
import {useTheme} from "./theme/useTheme";

const router = createBrowserRouter(
    createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<MainPageLazy/>}/>
                <Route path="/about" element={<AboutPageLazy/>}/>
            </Route>
    ));

const App: FC = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <RouterProvider router={router} />
            </Suspense>
        </div>
    );
};

export {App};

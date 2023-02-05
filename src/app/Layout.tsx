import {Outlet} from 'react-router-dom';
import {Navbar} from "widgets/Navbar";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export {Layout};

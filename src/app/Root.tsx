import {FC} from 'react';
import {Link, Outlet} from 'react-router-dom';

type RootProps = {};

const Root: FC<RootProps> = () => {
    return (
        <div>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            <Outlet />
        </div>
    );
};

export {Root};

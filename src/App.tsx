import {FC} from 'react';
import {Counter} from "./components/Counter";

type AppProps = {};

const App: FC<AppProps> = () => {
    return (
        <div>
            <Counter/>
        </div>
    );
};

export {App};

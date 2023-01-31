import {FC, useState} from 'react';
import classes from './Counter.module.scss';

type CounterProps = {};

const Counter: FC<CounterProps> = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(prevState => prevState + 1);
    }
    return (
        <div className={classes.btn}>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>

        </div>
    );
};

export {Counter};

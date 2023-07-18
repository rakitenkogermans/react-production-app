import { Button } from '@/shared/ui/Button';

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

const Counter = () => {
    const counterValue = useCounterValue();
    const { increment, decrement, add } = useCounterActions();

    const incrementHandler = () => {
        increment();
    };

    const decrementHandler = () => {
        decrement();
    };

    const addHandler = () => {
        add(5);
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={incrementHandler}
                data-testid="increment-btn"
            >
                {'increment'}
            </Button>
            <Button
                onClick={addHandler}
                data-testid="increment-btn-5"
            >
                {'add 5'}
            </Button>
            <Button
                onClick={decrementHandler}
                data-testid="decrement-btn"
            >
                {'decrement'}
            </Button>
        </div>
    );
};

export { Counter };

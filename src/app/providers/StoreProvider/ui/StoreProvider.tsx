import { type FC, type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { type DeepPartial } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
}

const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState as StateSchema);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export { StoreProvider };

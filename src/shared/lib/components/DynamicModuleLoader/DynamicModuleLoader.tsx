import { type ReactNode, useEffect } from 'react';

import { type Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';

import {
    type ReduxStoreWithManager,
    type StateSchema,
    type StateSchemaKey,
} from '@/app/providers/StoreProvider';

import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const { children, reducers, removeAfterUnmount = true } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();

        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];

            // adding new reducer only if its not exist
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return <>{children}</>;
};

export { DynamicModuleLoader };

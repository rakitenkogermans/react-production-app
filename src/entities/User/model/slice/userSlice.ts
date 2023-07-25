import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_USER_KEY } from '@/shared/const/localstorage';
import { setFeatureFlags } from '@/shared/lib/features';

import { type User, type UserSchema } from '../types/user';

const initialState: UserSchema = {
    _initialized: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
            if (user) {
                const parsedUser = JSON.parse(user) as User;
                state.authData = parsedUser;
                setFeatureFlags(parsedUser.features);
            }
            state._initialized = true;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
        },
    },
});
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

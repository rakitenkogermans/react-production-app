import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/const/localstorage';

import { getUserDataByIdQuery } from '../../api/userApi';
import { type User } from '../types/user';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'User/initAuthData',
    async (newJsonSettings, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;

        const userId = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

        if (!userId) {
            return rejectWithValue('');
        }

        try {
            const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();

            return response;
        } catch (err) {
            console.log(err);
            return rejectWithValue('error');
        }
    },
);

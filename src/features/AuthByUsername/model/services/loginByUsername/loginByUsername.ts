import { createAsyncThunk } from '@reduxjs/toolkit';
import { type User, userActions } from 'entities/User';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localstorage';
import { type ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername =
    createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
        'login/loginByUsername',
        async ({ username, password }, thunkAPI) => {
            const { extra, dispatch, rejectWithValue } = thunkAPI;

            try {
                const response = await extra.api.post<User>('/login', {
                    username, password,
                });

                if (!response.data) {
                    throw new Error();
                }

                localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
                dispatch(userActions.setAuthData(response.data));

                return response.data;
            } catch (err) {
                console.log(err);
                return rejectWithValue('error');
            }
        }
    );

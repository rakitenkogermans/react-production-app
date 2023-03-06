import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type User, userActions } from 'entities/User';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername =
    createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
        'login/loginByUsername',
        async ({ username, password }, thunkAPI) => {
            try {
                const response = await axios.post<User>('http://localhost:8000/login', {
                    username, password
                });

                if (!response.data) {
                    throw new Error();
                }

                localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
                thunkAPI.dispatch(userActions.setAuthData(response.data));

                return response.data;
            } catch (err) {
                console.log(err);
                return thunkAPI.rejectWithValue('error');
            }
        }
    );

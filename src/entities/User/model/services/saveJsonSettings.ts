import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/app/providers/StoreProvider';

import { setJsonSettingsMutation } from '../../api/userApi';
import { getUserAuthData } from '../../model/selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings/jsonSettings';
import { type JsonSettings } from '../types/jsonSettings';

export const saveJsonSettings = createAsyncThunk<JsonSettings, JsonSettings, ThunkConfig<string>>(
    'User/saveJsonSettings',
    async (newJsonSettings, thunkAPI) => {
        const { rejectWithValue, getState, dispatch } = thunkAPI;
        const userData = getUserAuthData(getState());
        const currentJsonSettings = getJsonSettings(getState());

        if (!userData) {
            return rejectWithValue('');
        }

        try {
            const response = await dispatch(
                setJsonSettingsMutation({
                    userId: userData.id,
                    jsonSettings: {
                        ...currentJsonSettings,
                        ...newJsonSettings,
                    },
                }),
            ).unwrap();

            if (!response.jsonSettings) {
                return rejectWithValue('');
            }

            return response.jsonSettings;
        } catch (err) {
            console.log(err);
            return rejectWithValue('error');
        }
    },
);

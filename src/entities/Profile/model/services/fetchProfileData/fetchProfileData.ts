import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Profile } from '../../types/profile';

export const fetchProfileData =
    createAsyncThunk<Profile, void, ThunkConfig<string>>(
        'profile/fetchProfileData',
        async (_, thunkAPI) => {
            const { extra, rejectWithValue } = thunkAPI;

            try {
                const response = await extra.api.get<Profile>('/profile');

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (err) {
                console.log(err);
                return rejectWithValue('error');
            }
        }
    );

import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Profile, ValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData =
    createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
        'profile/updateProfileData',
        async (_, thunkAPI) => {
            const { extra, rejectWithValue, getState } = thunkAPI;

            const formData = getProfileForm(getState());

            const errors = validateProfileData(formData);

            if (errors.length) {
                return rejectWithValue(errors);
            }

            try {
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (err) {
                console.log(err);
                return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
            }
        }
    );

import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Article } from 'entities/Article';

export const fetchArticleRecommendations =
    createAsyncThunk<Article[], void, ThunkConfig<string>>(
        'articlesDetailsPage/fetchArticleRecommendations',
        async (props, thunkAPI) => {
            const { extra, rejectWithValue } = thunkAPI;

            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _limit: 5,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (err) {
                return rejectWithValue('error');
            }
        }
    );

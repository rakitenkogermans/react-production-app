import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

        const userData = getUserAuthData(getState());
        const articleData = getArticleDetailsData(getState());

        if (!userData || !text || !articleData) {
            return rejectWithValue('error');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: articleData.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(articleData.id));

            return response.data;
        } catch (err) {
            return rejectWithValue('error');
        }
    },
);

import { combineReducers } from '@reduxjs/toolkit';
import { type ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { articleDetailsPageRecommendationsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});

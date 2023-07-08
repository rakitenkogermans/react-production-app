import { type EntityState } from '@reduxjs/toolkit';
import { type Article, type ArticleSortField, type ArticleType } from '@/entities/Article';
import { type SortOrder } from '@/shared/types';
import { type ArticleView } from '@/entities/Article/model/consts/articleConsts';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;

    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;

    _initialized: boolean;
}

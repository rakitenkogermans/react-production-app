import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUsername';
import {
    type AnyAction,
    type CombinedState, type Dispatch,
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject,
} from '@reduxjs/toolkit';
import { type ProfileSchema } from 'entities/Profile';
import { type AxiosInstance } from 'axios';
import { type To } from '@remix-run/router';
import { type NavigateOptions } from 'react-router';
import { type ArticleDetailsSchema } from 'entities/Article';
import { type ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { type AddCommentFormSchema } from 'features/addCommentForm';
import { type ArticlesPageSchema } from 'pages/ArticlesPage';
import { type UISchema } from 'features/UI';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    ui: UISchema

    // Lazy reducers
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void

    // true = mounted, false = unmounted
    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}

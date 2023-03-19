import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from 'entities/Article/model/selectors/articleDetails';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
};

const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    // const isLoading = useSelector(getArticleDetailsIsLoading);
    const isLoading = true;

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div className={cls.skeleton}>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border={'50%'}
                />
                <Skeleton
                    width={300}
                    height={32}
                />
                <Skeleton
                    width={600}
                    height={24}
                />
                <Skeleton
                    width="100%"
                    height={200}
                />
                <Skeleton
                    width="100%"
                    height={200}
                />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Something went wrong while loading article') ?? ''}
            />
        );
    } else {
        content = (
            <div>Article Details</div>
        );
    }

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={true}
        >
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});

export { ArticleDetails };

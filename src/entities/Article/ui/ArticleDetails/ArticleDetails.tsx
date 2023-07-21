import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';

import cls from './ArticleDetails.module.scss';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { type ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const isLoading = useSelector(getArticleDetailsIsLoading);

    const renderBlock = useCallback((block: ArticleBlock) => {
        if (block.type === ArticleBlockType.CODE) {
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                />
            );
        }

        if (block.type === ArticleBlockType.IMAGE) {
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    className={cls.image}
                    block={block}
                />
            );
        }

        if (block.type === ArticleBlockType.TEXT) {
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    block={block}
                />
            );
        }

        return null;
    }, []);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    let content;

    if (isLoading) {
        content = (
            <VStack
                align={'start'}
                gap={'8'}
                max
            >
                <HStack
                    justify={'center'}
                    max
                >
                    <Skeleton
                        className={cls.avatar}
                        width={200}
                        height={200}
                        border={'50%'}
                    />
                </HStack>
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
            </VStack>
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
            <>
                <HStack
                    justify={'center'}
                    max
                >
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </HStack>
                <VStack
                    align={'start'}
                    gap={'4'}
                    max
                >
                    <Text
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap={'8'}>
                        <Icon Svg={EyeIcon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap={'8'}>
                        <Icon Svg={CalendarIcon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={false}
        >
            <VStack
                data-testid={'ArticleDetails.Info'}
                align={'start'}
                gap={'16'}
                max
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});

export { ArticleDetails };

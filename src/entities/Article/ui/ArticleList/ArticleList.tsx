import { type HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { type Article } from '../../model/types/article';
import { ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { HStack } from 'shared/ui/Stack';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.GRID ? 9 : 3).fill(0).map((item, index) => (
        <ArticleListItemSkeleton
            view={view}
            key={index}
            className={cls.card}
        />
    ));

const ArticleList = memo((props: ArticleListProps) => {
    const { className, articles, view = ArticleView.GRID, isLoading, target } = props;
    const { t } = useTranslation('articles');

    // if (isLoading) {
    //     return (
    //         <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
    //             {getSkeletons(view)}
    //         </div>
    //     );
    // }

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <Text
                size={TextSize.L}
                title={t('Articles not found') ?? ''}
                align={TextAlign.CENTER}
            />
        );
    }

    return (
        <HStack
            gap={'16'}
            max
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </HStack>
    );
});

export { ArticleList };

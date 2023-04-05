import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { type Article } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}

const getSkeletons = (view: ArticleView) => (
    new Array(view === ArticleView.GRID ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                view={view}
                key={index}
                className={cls.card}
            />
        ))
);

const ArticleList = memo((props: ArticleListProps) => {
    const { className, articles, view = ArticleView.GRID, isLoading } = props;

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
        />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null
            }
            {isLoading && getSkeletons(view)}
        </div>
    );
});

export { ArticleList };

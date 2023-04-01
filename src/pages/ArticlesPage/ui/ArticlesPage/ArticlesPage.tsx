import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList
                view={ArticleView.GRID}
                articles={[]}
            />
        </div>
    );
});

export default ArticlesPage;

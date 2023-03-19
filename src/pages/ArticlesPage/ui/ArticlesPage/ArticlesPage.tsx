import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { memo } from 'react';

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            {'ArticlesPage'}
        </div>
    );
});

export default ArticlesPage;

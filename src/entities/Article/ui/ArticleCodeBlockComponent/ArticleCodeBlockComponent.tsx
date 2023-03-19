import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string
}

const ArticleCodeBlockComponent = ({ className }: ArticleCodeBlockComponentProps) => {
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            ArticleCodeBlockComponent
        </div>
    );
};

export { ArticleCodeBlockComponent };

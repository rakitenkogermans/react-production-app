import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string
}

const ArticleTextBlockComponent = ({ className }: ArticleTextBlockComponentProps) => {
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            ArticleTextBlockComponent
        </div>
    );
};

export { ArticleTextBlockComponent };

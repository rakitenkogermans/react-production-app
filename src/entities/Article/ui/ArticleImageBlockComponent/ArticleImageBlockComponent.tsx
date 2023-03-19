import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string
}

const ArticleImageBlockComponent = ({ className }: ArticleImageBlockComponentProps) => {
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            ArticleImageBlockComponent
        </div>
    );
};

export { ArticleImageBlockComponent };

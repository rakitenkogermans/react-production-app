import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleEditForm.module.scss';

interface ArticleEditFormProps {
    className?: string;
}

const ArticleEditForm = memo(({ className }: ArticleEditFormProps) => {
    return (
        <div className={classNames(cls.ArticleEditForm, {}, [className])}>{'ArticleEditForm'}</div>
    );
});

export { ArticleEditForm };

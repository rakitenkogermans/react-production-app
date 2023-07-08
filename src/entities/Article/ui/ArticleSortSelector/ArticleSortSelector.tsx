import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { Select, type SelectOption } from '@/shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { type SortOrder } from '@/shared/types';
import { ArticleSortField } from '../../model/consts/articleConsts';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { onChangeSort, onChangeOrder, sort, order, className } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(
        () => [
            {
                value: 'asc',
                content: t('Ascending'),
            },
            {
                value: 'desc',
                content: t('Descending'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('Date created'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('Title'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('Views'),
            },
        ],
        [t],
    );

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                options={sortFieldOptions}
                label={t('Sort BY') ?? ''}
                value={sort}
                onChange={onChangeSort}
            />
            <Select<SortOrder>
                options={orderOptions}
                label={t('Order') ?? ''}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});

export { ArticleSortSelector };

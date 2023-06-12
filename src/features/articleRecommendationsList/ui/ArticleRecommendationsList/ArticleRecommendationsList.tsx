import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleRecommendationsList.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { isLoading, data: articles, error } = useArticleRecommendationsList(6);

    if (isLoading || error) {
        return null;
    }

    return (
        <VStack
            gap={'8'}
            max
            className={classNames('', {}, [className])}
        >
            <Text
                size={TextSize.L}
                title={t('Recommendations') ?? ''}
            />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                target={'_blank'}
                className={cls.recommendations}
            />
        </VStack>
    );
});

export { ArticleRecommendationsList };

import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import { HStack } from 'shared/ui/Stack';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <HStack
            justify={'between'}
            max
            className={classNames('', {}, [className])}
        >
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onBackToList}
            >
                {t('Back to list') ?? ''}
            </Button>
            {canEdit && (
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditArticle}
                >
                    {t('Edit') ?? ''}
                </Button>
            )}
        </HStack>
    );
});

export { ArticleDetailsPageHeader };

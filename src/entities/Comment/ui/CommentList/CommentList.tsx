import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { type Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack
                gap={'16'}
                max
                className={classNames('', {}, [className])}
            >
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack
            align={'start'}
            gap={'16'}
            max
            className={classNames('', {}, [className])}
        >
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <Text text={t('No comments') ?? ''} />
            )}
        </VStack>
    );
});

export { CommentList };

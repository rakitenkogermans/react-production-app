import { memo } from 'react';

import { RoutePath } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './CommentCard.module.scss';
import { type Comment } from '../../model/types/comment';


interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
        return (
            <VStack
                align={'start'}
                gap={'8'}
                max
                className={classNames(cls.CommentCard, {}, [className, cls.loading])}
            >
                <HStack
                    gap={'8'}
                    max
                >
                    <Skeleton
                        width={30}
                        height={30}
                        border="50%"
                    />
                    <Skeleton
                        width={100}
                        height={16}
                    />
                </HStack>
                <Skeleton width={'100%'} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            align={'start'}
            gap={'8'}
            max
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink to={RoutePath.profile + comment.user.id}>
                <HStack
                    gap={'8'}
                    max
                >
                    {comment.user.avatar && (
                        <Avatar
                            size={30}
                            src={comment.user.avatar}
                        />
                    )}
                    <Text title={comment.user.username} />
                </HStack>
            </AppLink>
            <Text text={comment.text} />
        </VStack>
    );
});

export { CommentCard };

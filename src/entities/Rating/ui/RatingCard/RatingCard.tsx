import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    successTitle?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onAccept,
        onCancel,
        hasFeedback,
        feedbackTitle,
        title,
        successTitle,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const isMobile = useDevice();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                value={feedback}
                onChange={setFeedback}
                label={t('Your review') ?? ''}
            />
        </>
    );

    return (
        <Card
            fullWidth
            className={classNames('', {}, [className])}
        >
            <VStack
                align={'center'}
                gap={'8'}
            >
                <Text title={starsCount ? successTitle : title} />
                <StarRating
                    selectedStars={starsCount}
                    size={50}
                    onSelect={onSelectStars}
                />
            </VStack>
            {isMobile ? (
                <Drawer
                    isOpen={isModalOpen}
                    onClose={cancelHandle}
                >
                    <VStack
                        max
                        gap={'32'}
                    >
                        {modalContent}
                        <Button
                            fullWidth
                            onClick={acceptHandle}
                            theme={ButtonTheme.BACKGROUND}
                        >
                            {t('Send')}
                        </Button>
                    </VStack>
                </Drawer>
            ) : (
                <Modal
                    onClose={cancelHandle}
                    isOpen={isModalOpen}
                    lazy
                >
                    <VStack
                        max
                        gap={'32'}
                    >
                        {modalContent}
                        <HStack
                            max
                            justify={'end'}
                            gap={'16'}
                        >
                            <Button
                                onClick={cancelHandle}
                                theme={ButtonTheme.OUTLINE_RED}
                            >
                                {t('Close')}
                            </Button>
                            <Button
                                onClick={acceptHandle}
                                theme={ButtonTheme.BACKGROUND}
                            >
                                {t('Send')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            )}
        </Card>
    );
});

export { RatingCard };

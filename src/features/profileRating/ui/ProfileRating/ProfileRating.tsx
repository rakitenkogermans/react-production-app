import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileRating.module.scss';

interface ProfileRatingProps {
    className?: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className } = props;

    return <div className={classNames(cls.ProfileRating, {}, [className])}>{'ProfileRating'}</div>;
});

export { ProfileRating };

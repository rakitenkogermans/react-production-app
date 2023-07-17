import { type CSSProperties, memo, useMemo } from 'react';

import { classNames, type Mods } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';
import UserIcon from '../../assets/icons/user-filled-32-32.svg';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

const Avatar = memo(({ className, src, size = 100, alt }: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = (
        <Skeleton
            width={size}
            height={size}
            border={'50%'}
        />
    );
    const errorFallback = (
        <Icon
            width={size}
            Svg={UserIcon}
        />
    );

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
});

export { Avatar };

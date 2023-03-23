import { type FC, memo, type SVGProps } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string
    Svg: FC<SVGProps<SVGSVGElement>>
}

const Icon = memo((props: IconProps) => {
    const { className, Svg } = props;
    return (
        <Svg className={classNames(cls.Icon, {}, [className])} />
    );
});

export { Icon };

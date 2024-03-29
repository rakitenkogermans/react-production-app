import { memo, useCallback } from 'react';

import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Code.module.scss';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

interface CodeProps {
    className?: string;
    text: string;
}

const Code = memo(({ className, text }: CodeProps) => {
    const onCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(text);
            console.log('Content copied to clipboard');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }, [text]);

    return (
        <>
            <Button
                className={cls.copyBtn}
                onClick={onCopy}
            >
                <Icon Svg={CopyIcon} />
            </Button>
            <pre className={classNames(cls.Code, {}, [className])}>
                <code>{text}</code>
            </pre>
        </>
    );
});

export { Code };

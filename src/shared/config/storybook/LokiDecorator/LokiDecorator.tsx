import { useEffect } from 'react';

// @ts-ignore
import createAsyncCallback from '@loki/create-async-callback';
// @ts-ignore
import isLokiRunning from '@loki/is-loki-running';
import { type StoryFn } from '@storybook/react';

const delay = 3000;
export const LokiDecorator = (StoryComponent: StoryFn) => {
    useEffect(() => {
        if (isLokiRunning()) {
            const onDone = createAsyncCallback();
            const timer = setTimeout(() => {
                onDone();
            }, delay);
            return () => {
                clearTimeout(timer);
            };
        }
        return undefined;
    }, []);

    return <StoryComponent />;
};

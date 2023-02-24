import { lazy } from 'react';

export const MainPageLazy = lazy(
    async () => await import('./MainPage')
        .then((module) => ({ default: module.MainPage }))
);

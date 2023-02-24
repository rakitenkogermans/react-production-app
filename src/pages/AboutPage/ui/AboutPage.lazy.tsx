import { lazy } from 'react';

// export const AboutPageLazy = lazy(() => import('./AboutPage').then((module) => ({ default: module.AboutPage })));

export const AboutPageLazy = lazy(async () => await new Promise(resolve => {
    setTimeout(() => {
        resolve(
            import('./AboutPage')
                .then((module) => ({ default: module.AboutPage })));
    }, 2000);
}).then());

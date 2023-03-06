import { lazy } from 'react';

export const ProfilePageLazy = lazy(
    async () => await import('./ProfilePage')
        .then((module) => ({ default: module.ProfilePage }))
);

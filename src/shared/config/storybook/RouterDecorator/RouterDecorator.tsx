import React from 'react';

import { type Story } from '@storybook/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

export interface RouterDecoratorOptions {
    route?: string;
    path?: string;
}

export const RouterDecorator = (options: RouterDecoratorOptions) => (StoryComponent: Story) => {
    const { route, path } = options;

    if (!route || !path) {
        return (
            <BrowserRouter>
                <StoryComponent />
            </BrowserRouter>
        );
    }
    return (
        <MemoryRouter initialEntries={[route]}>
            <Routes>
                <Route
                    path={path}
                    element={<StoryComponent />}
                />
            </Routes>
        </MemoryRouter>
    );
};

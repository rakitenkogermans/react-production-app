import { type ReactNode } from 'react';

import { type ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line fsd-architecture-check/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { THEME } from '@/shared/const/theme';
// eslint-disable-next-line fsd-architecture-check/layer-imports
import '@/app/styles/index.scss';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: THEME;
}

interface TestProviderProps {
    children: ReactNode;
    options?: componentRenderOptions;
}

export const TestProvider = (props: TestProviderProps) => {
    const { options = {}, children } = props;
    const { initialState, asyncReducers, route = '/', theme = THEME.LIGHT } = options;
    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                asyncReducers={asyncReducers}
                initialState={initialState}
            >
                <I18nextProvider i18n={i18nForTests}>
                    <ThemeProvider initialTheme={theme}>
                        <div className={`app ${theme}`}>{children}</div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
};

export const componentRender = (component: ReactNode, options: componentRenderOptions = {}) => {
    const { route = '/', initialState, asyncReducers } = options;

    return render(<TestProvider options={options}>{component}</TestProvider>);
};

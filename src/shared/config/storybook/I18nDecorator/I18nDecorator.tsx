import { Suspense, useEffect } from 'react';

import { type StoryContext, type StoryFn } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';

import i18n from '../../i18n/i18n';

export const I18nDecorator = (StoryComponent: StoryFn, context: StoryContext) => {
    const { locale } = context.globals;

    useEffect(() => {
        void i18n.changeLanguage(locale).then();
    }, [locale]);

    return (
        <Suspense fallback={<div>loading translations...</div>}>
            <I18nextProvider i18n={i18n}>
                <StoryComponent />
            </I18nextProvider>
        </Suspense>
    );
};

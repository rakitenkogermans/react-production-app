import { type Story, type StoryContext } from '@storybook/react';
import i18n from '../../i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import { Suspense, useEffect } from 'react';

export const I18nDecorator = (StoryComponent: Story, context: StoryContext) => {
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

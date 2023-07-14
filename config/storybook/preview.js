import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { I18nDecorator } from '../../src/shared/config/storybook/I18nDecorator/I18nDecorator';
import { THEME } from '../../src/shared/const/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            {
                name: 'light',
                class: ['app', THEME.LIGHT],
                color: '#f9f4ef',
            },
            {
                name: 'dark',
                class: ['app', THEME.DARK],
                color: '#16161a',
            },
            {
                name: 'yellow',
                class: ['app', THEME.YELLOW],
                color: '#ffd803',
            },
        ],
    },
};

let globalTypes;
if (!!process.env.STORYBOOK_LOCALES) {
    globalTypes = {
        locale: {
            name: 'Locale',
            description: 'Internationalization locale',
            toolbar: {
                icon: 'globe',
                items: [
                    {
                        value: 'en',
                        title: 'English',
                    },
                    {
                        value: 'lv',
                        title: 'Latviski',
                    },
                ],
                showName: true,
            },
        },
    };

    // import('../../src/shared/config/storybook/I18nDecorator/I18nDecorator').then(({ I18nDecorator }) => {
    //     addDecorator(I18nDecorator);
    // });

    addDecorator(I18nDecorator);
}

export { globalTypes };

console.log('===============================================================================');
console.log(!!process.env.STORYBOOK_LOCALES);
console.log('===============================================================================');
addDecorator(I18nDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(THEME.LIGHT));
// addDecorator(RouterDecorator);

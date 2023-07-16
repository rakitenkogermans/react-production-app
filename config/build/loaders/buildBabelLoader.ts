import { type BuildOptions } from '../types/config';
import { babelRemovePropsPlugin } from '../../babel/babelRemovePropsPlugin';

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx?: boolean;
}

export const buildBabelLoader = ({ isDev, isTsx }: BuildBabelLoaderProps) => {
    const isProd = !isDev;
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['en', 'lv'],
                            nsSeparator: '_',
                            outputPath: 'public/locales/{{locale}}/{{ns}}.json',
                            keyAsDefaultValue: true,
                            discardOldKeys: true,
                        },
                    ],
                    ['@babel/plugin-transform-typescript', { isTsx }],
                    '@babel/plugin-transform-runtime',
                    isTsx && isProd && [babelRemovePropsPlugin, { props: ['data-testid'] }],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
};

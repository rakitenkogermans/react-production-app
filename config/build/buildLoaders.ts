import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['en', 'lv'],
                            nsSeparator: '_',
                            outputPath: 'public/locales/{{locale}}/{{ns}}.json',
                            keyAsDefaultValue: true,
                            discardOldKeys: true
                        }
                    ]
                ]
            }
        }
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff|ttf|otf)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    };

    const svgLoader = buildSvgLoader();

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    const cssLoader = buildCssLoader(isDev);

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader
    ];
};

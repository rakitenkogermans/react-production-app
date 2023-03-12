import webpack from 'webpack';
import { type BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

import { type Configuration as WebpackConfiguration } from 'webpack';
import { type Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration
}

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        buildLocales: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        public: '',
        publicLocales: ''
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    if (config.module) {
        // @ts-ignore
        config.module.rules = config.module.rules?.map((rule: webpack.RuleSetRule) => {
            if (String(rule.test).includes('svg')) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });
    }

    config.module?.rules?.push(buildSvgLoader());
    config.module?.rules?.push(buildCssLoader(true));
    config.plugins?.push(new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook')
    }));

    return config;
};

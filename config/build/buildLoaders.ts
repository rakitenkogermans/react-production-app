import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {
    const typescript = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        typescript,
    ];
}

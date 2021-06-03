const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./src/js/index.js', './src/scss/index.scss'],
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'js/main.min.js',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test:/\.(scss|sass)$/,
                use:[
                    MiniCSSExtractPlugin.loader, 'css-loader','sass-loader'
                ]
            },
        ],
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'css/main.min.css'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 9000,
    },
};
const path = require('path');

module.exports = {
    entry: './index.html',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.html',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};

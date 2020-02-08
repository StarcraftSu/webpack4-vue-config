const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        app:path.resolve(__dirname,'../src/main.js')
    },
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'js/[name].[hash:4].js',
        chunkFilename:'js/[name].[hash:4].js',
        publicPath: '/'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'babel-loader'
                    }
                ]
            },
            {
                test:/\.(css|sass|scss)$/,
                use:[
                    {
                        loader:"style-loader",
                    },
                    {
                        loader:"style-loader",
                    },
                    {
                        loader:"sass-loader",
                        options:{
                            implementation:require('dart-sass') //转换scss语法，结合sass-loader使用，替代node-sass
                        }
                    }

                ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.resolve(__dirname,'../public/index.html'),
            filename: path.resolve(__dirname,'../dist/index.html')
        })
    ]
}
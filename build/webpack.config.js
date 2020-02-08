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
            },
            {
                test:/\.(jpe?g|png|gif)$/i,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:5120,
                            esModule:false,
                            fallback:'file-loader',
                            name:'images/[name].[hash:4].[ext]'
                        }
                    }
                ]
            },
            {
                test:/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:5120,
                            esModule:false,
                            fallback:'file-loader',
                            name:'media/[name].[hash:4].[ext]'
                        }
                    }
                ]
            },
            {
                test:/\.(woff2?|eot|ttfotf)(\?.*)?$/i,
                use:[
                    {
                        loader: 'url-loader',
                        options:{
                            limit:5120,
                            esModule:false,
                            fallback:'file-loader',
                            name:'fonts/[name].[hash:4].[ext]'
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
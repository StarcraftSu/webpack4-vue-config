const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
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
            },
            {
                test:/\.vue$/,
                use:[
                    {
                        loader:'vue-loader',
                        options:{
                            compilerOptions:{
                                preserveWhitespace:false
                            }
                        }
                    }
                ]
            }
        ]
    },
    //扩展名，别名，第三方包
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.runtime.esm.js',
            '@':path.resolve(__dirname,'../src'),
            //添加 resolve.extensiions属性，方便引入依赖或者文件的时候可以省略后缀
            extensions:['*','.js','vue']
        }
    },
    devServer:{
        host:'0,0,0,0',
        hot:true,
        port:9000,
        contentBase:'./dist'
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.resolve(__dirname,'../public/index.html'),
            filename: path.resolve(__dirname,'../dist/index.html')
        }),
        new VueLoaderPlugin(),
        new webpack.NamedChunksPlugin(),
        new webpack.HotModuleReplacementPlugin() //启动热更新
    ]
}
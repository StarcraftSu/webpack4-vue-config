const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
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
                test:/\.vue$/,
                use:[
                    {
                        loader:"vue-loader",
                        options:{
                            loaders: {
                                css:"vue-style-loader!css-loader",
                                scss: "vue-style-loader!css-loader!sass-loader" // <style lang="scss">
                            },
                            compilerOptions:{
                                preserveWhitespace:false
                            }
                        }
                    }
                ]
            },
            {
                test:/\.(sass|scss)$/,
                use:[
                    {
                        loader:"style-loader",
                    },
                    {
                        loader:"css-loader",
                    },
                    {
                        loader:"sass-loader",
                        options:{
                            implementation:require("dart-sass") //转换scss语法，结合sass-loader使用，替代node-sass
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
        ]
    },
    //扩展名，别名，第三方包
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.runtime.esm.js',
            '@':path.resolve(__dirname,'../src'), 
        },
        //添加 resolve.extensions属性，方便引入依赖或者文件的时候可以省略后缀
        extensions:['*','.js','vue']
    },
    devServer:{
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8081, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        contentBase:'./dist',
        historyApiFallback:true
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
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
            }
        ]
    }
}
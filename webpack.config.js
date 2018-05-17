let path = require('path')
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    
    entry:{
        app:[
            './src/js/app.js',
            './src/sass/style.sass'
        ],
    },

    output: {
        filename:'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    devServer:{
        overlay: true
        //contentBase: './app'
    },
     module:{
         rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use: [
                        {
                            loader:'css-loader',
                            options:{sourceMap:true}
                        },
                        {
                            loader:'sass-loader',
                            options:{sourceMap:true}
                        }
                    ],
                   
                  })
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin("./css/style.css"),
      ],
}
module.exports = conf;

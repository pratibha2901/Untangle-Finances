const {merge} = require("webpack-merge");
const common = require("./webpack.common.cjs");
const path = require("path");
//If your page expects to find the bundle files on a different path, you can change this with the devMiddleware.publicPath option in the dev server's configuration.
module.exports = merge(common,{
    "mode": 'development',
    "devtool": 'inline-source-map',
    devServer:{
       static: path.resolve(__dirname,'build'),
       compress: true,
       port: 3000,
       hot: true,
       
    }
})
const {merge} = require("webpack-merge");
const common = require("./webpack.common.cjs");
const path = require("path")

module.exports = merge(common,{
    "mode": 'production',
    "devtool": 'source-map',
    devServer:{
        static: path.resolve(__dirname,'build'),
        compress: true,
        port: 3000,
        devMiddleWare:{
            index: true,
           publicPath: '/UntangleFinances',
          serverSideRender: true,
           writeToDisk: true,
        }
     }
})
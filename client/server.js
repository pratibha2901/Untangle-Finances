import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import prodConfig from './webpack.prod';

const app = express();
const compiler = webpack(prodConfig);
app.use(webpackDevMiddleware(compiler,prodConfig.devServer))
app.listen(prodConfig.devServer.port,()=>{
    console.log(`Application listening on port ${prodConfig.devServer.port}`)
})
var webpack = require('webpack');
var path = require('path');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	//插件项
//    plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index : './js/index.js'
    },
    //入口文件输出配置
    output: {
        path: './build',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [{
        	test: /\.vue$/,loader: 'vue'
        },{
        	test: /\.css$/,loader: 'style-loader!css-loader'
        },{
        	test: /\.js$/,loader: ['babel-loader'],
        	exclude: /node_modules/,
      		loader: 'babel'
      	},{ 
      		test: /\.(png|jpg)$/,loader: 'url-loader?limit=8192'
      	}]
    },
    vue: {
        autoprefixer: false
    },
    babel: {
        presets: ['es2015', 'stage-2'],
        plugins: ['transform-runtime']
    },
    //其它解决方案配置
    resolve: {
        extensions: ['', '.js', '.json','.css']
    }
};
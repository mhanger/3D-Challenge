const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

const threeMinifier = require('@yushijinhun/three-minifier-rollup')
module.exports = {

    configureWebpack: {
        plugins: [new BundleAnalyzerPlugin()],
    }
};


let baseConfig = require('./build/dev.config');

    baseConfig.devServer={
        contentBase:'dist',
        compress: true,
        port: 1234,
        index: 'index.html',
        overlay: true,
        open: true
    }

module.exports = baseConfig;

const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use('/api',    // 指定需要转发的请求
        createProxyMiddleware({
            target: 'http://localhost:3002',
            changeOrigin: true
        })
    );
}
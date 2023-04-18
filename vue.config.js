module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://123.60.184.136:10010',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '', // 将 "/api" 重写为空字符串
          },
        },
      },
    },
  };
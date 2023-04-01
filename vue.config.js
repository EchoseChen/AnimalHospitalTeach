module.exports={
    devServer:{
        proxy:{
            ["/api"]:{
            target:'http://1.116.1.85:8080/api',
              changeOrigin:true,
                pathRewrite: {
                    // ["^/api"]: ""
                    '^/api':''//重写路径
                }
            }
        }

    }
}

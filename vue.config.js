module.exports={
    devServer:{
        proxy:{
            "/api":{
                target:'http://123.60.184.136:10010/api',
                changeOrigin:true,
                pathRewrite: {
                    // ["^/api"]: ""
                    '^/api':''//重写路径
                }
            },
        }
    }
}
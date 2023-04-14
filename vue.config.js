module.exports={
    devServer:{
        proxy:{
            ["/api"]:{
            // target:'http://1.116.1.85:8080/api',
            target:'http://123.60.184.136:10010/api',
              changeOrigin:true,
                pathRewrite: {
                    // ["^/api"]: ""
                    '^/api':''//重写路径
                }
            },
            ["/baidu"]:{
                target:'https://www.baidu.com',
                changeOrigin:true,
                pathRewrite: {
                    '^':''//重写路径
                }
            },
            '/app':{
                target:'http://123.60.184.136:10010/api',
                pathRewrite:{
                    '^/app':''
                },
                ws:true,
                changeOrigin:true
            },
        }
    }
}
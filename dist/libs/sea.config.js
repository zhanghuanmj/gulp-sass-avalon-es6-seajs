/**
 * @author: zhanghuan
 * @create: 2017/9/14
 * @describe: seajs主配置文件
 */
"use strict";
seajs.config({
    alias: { /*alias配置各模块别名，页面引入直接引入别名*/
        "IE7": "IE7.js",
        "json3": "json3.min.js",
        "promise": "promise.js",
        "avalon": "avalon.js",
        "md5": "md5.min.js",
        "jquery": "jquery-1.11.3/jquery.min.js",
        "index": "/index.js"

    },
    preload: ["avalon","jquery"],/*配置提取预加载模块，全局模块，所以页面都需要使用的模块*/
    debug: true // 调试模式
});
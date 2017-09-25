/**
 * @author: zhanghuan
 * @create: 2017/9/13
 * @describe: 首页
 */
"use strict";
define(function (require, exports, module) {
    function Index() {
        this.init.apply(this, arguments);
    }
    Index.prototype = {
        init: function () {
            var vm = avalon.define({
                $id: "index",
                data: [1,2,5],
                init: function () {
                    console.log('a', avalon);
                }
            });
            vm.init();
            avalon.scan(document.body);
        }
    };

    module.exports = new Index();
});
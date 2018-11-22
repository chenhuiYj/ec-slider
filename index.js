require("./index.html");
require("./src/sass/index.scss");
require("./fontSize");
import Vue from 'vue'
import ecDialog from 'ec-dialog'
import ecslide from './src/js/components/index';
Vue.use(ecslide);
Vue.use(ecDialog);
//let img=require('/dist/images/img1.jpg');
let app6 = new Vue({
    el: "#app6",
    data: {
        name:'chen',
        isTrue: [false],
        list: [
            {
                src: 'http://thyrsi.com/t6/613/1542871409x2890211738.jpg',
                href:'https://www.baidu.com'
            },
            {
                src: "http://thyrsi.com/t6/613/1542871429x2890211738.jpg",
                href:'https://www.baidu.com'
            },
            {
                src: "http://thyrsi.com/t6/613/1542871442x2890211738.jpg",
                href:'https://www.baidu.com'
            },
            {
                src: "http://thyrsi.com/t6/613/1542871463x2890211738.jpg",
            }
        ],
        list2: [
            {
                src: 'http://thyrsi.com/t6/613/1542871429x2890211738.jpg',
                href:'https://www.baidu.com'
            }
        ]
    },
    mounted(){
        this.isTrue[0] = true;
        this.$ec_alert({
            content:'提示的内容'
        })
    }

});



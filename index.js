//require("./index.html");
require("./src/sass/index.scss");
require("./fontSize");
import Vue from 'vue'
import ecDialog from 'ec-dialog'
import ecslide from './src/js/components/index';
Vue.use(ecslide);
Vue.use(ecDialog);
//let img=require('/dist/images/img1.jpg');
require("./index.html");
let imgUrl = [require('./src/images/img1.jpg'),require('./src/images/img2.jpg'),require('./src/images/img3.jpg')];
let app6 = new Vue({
    el: "#app6",
    data: {
        name:'chen',
        isTrue: [false],
        list: [
            {
                src: imgUrl[0],
                href:'https://www.baidu.com'
            },
            {
                src: imgUrl[1],
                href:'https://www.baidu.com'
            },
            {
                src: imgUrl[2],
                href:'https://www.baidu.com'
            },
            {
                src: imgUrl[2],
            }
        ],
        list2: [
            {
                src: '/dist/images/img1.jpg',
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


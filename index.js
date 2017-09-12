require("./index.html");
require("./src/sass/index.scss");
require("./fontSize");
import Vue from 'vue'
import ecslide from './src/js/components/index';
Vue.use(ecslide);
let app6 = new Vue({
    el: "#app6",
    data: {
        isTrue: [false],
        list: [
            {
                src: 'http://i2.kiimg.com/1949/dc149abbf35fe1f3.jpg',
                href:'https://www.baidu.com'
            },
            {
                src: "http://i2.kiimg.com/1949/9906f77c822ab42d.jpg",
                href:'https://www.baidu.com'
            },
            {
                src: "http://i2.kiimg.com/1949/92d88e0ff8edee1a.jpg",
                href:'https://www.baidu.com'
            },
            {
                src: "http://i2.kiimg.com/1949/2a7d10e224cfaa8e.jpg",
            }
        ],
        list2: [
            {
                src: 'http://i2.kiimg.com/1949/dc149abbf35fe1f3.jpg',
                href:'https://www.baidu.com'
            }
        ]
    },
    mounted(){
        this.isTrue[0] = true;
    }

});



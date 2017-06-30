require("./index.html");
require("./src/sass/index.scss");
import Vue from 'vue'
import ecSlide from './src/js/components/index';
Vue.use(ecSlide);
let app6 = new Vue({
    el: "#app6",
    data: {
        isTrue: [false],
        list: [
            {
                src: 'http://i2.kiimg.com/1949/dc149abbf35fe1f3.jpg'
            },
            {
                src: "http://i2.kiimg.com/1949/9906f77c822ab42d.jpg"
            },
            {
                src: "http://i2.kiimg.com/1949/92d88e0ff8edee1a.jpg"
            },
            {
                src: "http://i2.kiimg.com/1949/2a7d10e224cfaa8e.jpg"
            }
        ]
    },
    mounted(){
        this.isTrue[0] = true;
    }

});



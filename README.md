# Eslide

#### 个人练手项目，基于vue2.0开发的图片轮播项目，目前功能不是很强大，还没有上传npm,功能也很少。以后再逐一完善

## 使用方法

### 引入文件 比如./src/js/components/index.js

      import SlideImg from './ecslide.vue'
      const ecSlide={
          install:function (Vue) {
              Vue.component('ecslide',SlideImg)
          }

      }
      export default ecSlide;
### 在入口文件在全局引入上面引入的文件

      import ecSlide from './src/js/components/index';

      Vue.use(ecSlide);

### html页面引用

    <ecSlide :list='list' :autoplay="true" :type="'slide'" :option="true" :time="4000" :sildetype="'ease'" :arrowurl="'http://i2.kiimg.com/1949/098c291e8db16ab5.jpg '" :arrowsize="'40,20'" :direction="'top'"></ecSlide>

### 配置说明
* list-图片列表  Array  [{src:'url'},{src:'url'}]
* autoplay-是否自动播放  布尔                       default  false
* type-轮播方式    string   'left' 'top'           default   left
* option-对应点  布尔                              default   false
* time-轮播间隔时间   int                          default   4000
* sildetype-动画样式 ‘ease’                        default   'ease'
* arrowurl-箭头图片链接  string
* arrowsize-箭头尺寸 string   ‘width,height’
* direction-切换方式  string ‘’







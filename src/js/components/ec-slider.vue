<template>
    <div class="switch-img-box" id="ec-slide-box">
        <div class="switch-img-type switch-img-left" v-if="type==='slide'&&direction==='left'" @touchstart="touchStar" @touchend="touchEnd">
            <ul :style="{'width':ulWidth,'transform':'translate3d(-'+(listWidth*(nowIndex+1))+'%,0,0)','transition-timing-function':slideChange}"
                :class="{'tran':noLast}">
                <li :style="{'width':listWidth+'%'}">
                    <a :href="list[list.length-1].href?list[list.length-1].href:'javascript:;'">
                        <img :src="list[list.length-1].src" class="slider-img"/>
                    </a>
                </li>
                <li v-for="(li,index) in list":style="{'width':listWidth+'%'}">
                    <a :href="li.href?li.href:'javascript:;'">
                    <img :src="li.src" class="slider-img"/>
                    </a>
                </li>
                <li :style="{'width':listWidth+'%'}">
                    <a :href="list[0].href?list[0].href:'javascript:;'">
                        <img :src="list[0].src" class="slider-img"/>
                    </a>
                </li>
            </ul>
        </div>
        <div class="switch-img-type switch-img-top" v-if="type==='slide'&&direction==='top'" @touchstart="touchStar" @touchend="touchEnd" :style="{'height':boxHeight}">
            <ul :style="{'transform':'translate3d(0,-'+(listWidth*(nowIndex+1))+'%,0)','transition-timing-function':slideChange}"
                :class="{'tran':noLast}">
                <li>
                    <a :href="list[list.length-1].href?list[list.length-1].href:'javascript:;'">
                        <img :src="list[list.length-1].src" class="slider-img" @load="imgLoad"/>
                    </a>
                </li>
                <li v-for="(li,index) in list">
                    <a :href="li.href?li.href:'javascript:;'">
                        <img :src="li.src" class="slider-img" @load="imgLoad"/>
                    </a>
                </li>
                <li>
                    <a :href="list[0].href?list[0].href:'javascript:;'">
                        <img :src="list[0].src" class="slider-img" @load="imgLoad"/>
                    </a>
                </li>
            </ul>
        </div>
        <div class="switch-img-type switch-img-transparent" v-if="type==='transparent'" @touchstart="touchStar" @touchend="touchEnd">
            <ul>
                <li v-for="(li,index) in list" :class="{'cur':index===nowIndex,'show':index===nowIndexShow}">
                    <a :href="li.href?li.href:'javascript:;'">
                        <img :src="li.src" class="slider-img"/>
                    </a>
                </li>
            </ul>
        </div>
        <div class="switch-option" v-if="option" :class="{'nolast':nowIndex===list.length, 'isFirst':nowIndex===-1,'switch-option-top':direction==='top'}">
            <div>
                <span class="active" v-if="nowIndex===list.length"></span>
                <span v-for="(li,index) in list" :class="{'active':index===nowIndex}"></span>
                <span class="active" v-if="nowIndex===-1"></span>
            </div>
        </div>
        <div class="switch-arrow" v-if="arrowurl&&arrowsize">
            <div :class="{'arrow-left':direction==='left','arrow-top':direction==='top'}" :style="{'width':arrowWidth+'px','height':arrowHeight+'px','background':'url('+arrowurl+') no-repeat','background-size':'100%'}" @click.stop="switchDo('reduce')"></div>
            <div :class="{'arrow-right':direction==='left','arrow-bottom':direction==='top'}" :style="{'width':arrowWidth+'px','height':arrowHeight+'px','background':'url('+arrowurl+') no-repeat','background-size':'100%'}"  @click.stop="switchDo"></div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        data () {
            return {
                nowIndex: 0,
                nowIndexShow:0,
                noLast: true,
                timer: null,
                slideChange: '',
                arrowWidth:'',
                arrowHeight:'',
                startX:0,
                startY:0,
                boxHeight:''
            }
        },
        computed: {
            ulWidth: function () {
                return (this.list.length + 2) + "00%";

            },
            listWidth:function () {
                return 100/(this.list.length+2)
            }
        },
        mounted(){
            if (this.autoplay) {
                this.autoSwitch();
            }
            this.slideChange = this.sildetype || 'ease';
            if(this.arrowsize&&this.arrowurl){
                this.arrowWidth=this.arrowsize.split(',')[0];
                this.arrowHeight=this.arrowsize.split(',')[1];
            }
        },
        props: ['list', 'autoplay', 'type', 'time', 'sildetype', 'arrowurl','arrowsize','option','direction'],
        methods: {
            //开始滑动
            touchStar(e){
                //e.preventDefault();
                this.startX=e.changedTouches[0].clientX;
                this.startY=e.changedTouches[0].clientY;
            },
            touchEnd(e){
                //e.preventDefault();
                if(this.direction==='left'){
                    if(e.changedTouches[0].clientX-this.startX>50){
                        this.switchDo('reduce')
                    }
                    else if(e.changedTouches[0].clientX-this.startX<-50){
                        this.switchDo()
                    }
                }
                else if(this.direction==='top'){
                    if(e.changedTouches[0].clientY-this.startY>50){
                        this.switchDo('reduce')
                    }
                    else if(e.changedTouches[0].clientY-this.startY<-50){
                        this.switchDo()
                    }
                }
            },
            //滑动操作
            switchDo(reduce){
                clearInterval(this.timer);
                if(reduce==='reduce'){
                    if(this.nowIndex===0){
                        if(this.type==='slide'){
                            this.nowIndex--;
                            setTimeout(() => {
                                this.nowIndex = this.list.length-1;
                                this.noLast = false;
                            }, 400)
                        }
                        else{
                            this.nowIndex = this.list.length-1;
                        }
                    }
                    else{
                        this.nowIndex--;
                    }
                }
                else{
                    this.nowIndex++;
                }
                if (this.nowIndex === this.list.length) {
                    if(this.type==='slide') {
                        setTimeout(() => {
                            this.nowIndex = 0;
                            this.noLast = false;
                        }, 400)
                    }
                    else{
                        this.nowIndex = 0;
                    }
                }
                setTimeout(()=>{
                    this.nowIndexShow=this.nowIndex;
                },1)
                if (this.autoplay) {
                    this.autoSwitch();
                }
                if(this.type==='slide') {
                    this.noLast = true;
                }

            },
            autoSwitch(){
                let time = this.time || 4000;
                this.timer = setInterval(() => {
                    this.switchDo();
                }, time);
            },
            imgLoad(e){
                this.boxHeight=e.path[0].offsetHeight+'px';
                console.log(this.boxHeight)
            }
        }
    }
</script>
<style lang="scss">
    .switch-img-box {
        width: 100%;
        height: 100%;
        position: relative;
        touch-action: none;
    }
    .switch-img-type{
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
        &.switch-img-top{
        }
        &.switch-img-left{
            li {
                display: inline-block;
                font-size: 0;
            }
        }
        &.switch-img-transparent {
            li {
                opacity: 0;
                transition: opacity 1s;
                width: 0;
                &.cur {
                    width: auto;
                }
                &.show{
                    opacity: 1;
                }
            }
        }
        ul {
            font-size: 0;
            &.tran {
                transition: all .4s;
            }
            li{
                text-align: center;
            }

            img {
                vertical-align: middle;
                max-width: 100%;
                max-height: 100%;
            }
        }
    }
    .switch-arrow {
        div {
            position: absolute;
            z-index: 2;
            margin: auto;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            opacity: .5;
            &:hover{
                opacity: 1;
            }
            &.arrow-left {
                left: 10px;
                right: auto;
            }
            &.arrow-right {
                right: 10px;
                left: auto;
                transform: rotate(180deg);
            }
            &.arrow-top {
                top: 10px;
                bottom: auto;
            }
            &.arrow-bottom {
                bottom: 10px;
                top: auto;
                transform: rotate(180deg);
            }
        }
    }
    .switch-option {
        position: absolute;
        font-size: 0;
        bottom: 10px;
        text-align: center;
        width: 100%;
        z-index: 5;
        &.isFirst {
            span:first-child {
                display: none;
            }
        }
        &.nolast {
            span:last-child {
                display: none;
            }
        }
        span {
            border-radius: 100%;
            margin: 0 5px;
            background: #fff;
            display: inline-block;
            width: 10px;
            height: 10px;
            &.active {
                background: #09f;
            }
        }
        &.switch-option-top{
            display: table;
            width: 10px;
            height: 100%;
            top: 0;
            right: 10px;
            margin: auto;
            bottom: 0;
            span{
                margin:5px 0;
            }
            div{display: table-cell;vertical-align: middle;}
        }
    }
</style>
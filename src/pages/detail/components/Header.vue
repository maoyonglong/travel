<template>
   <div class="header-wrapper backBtn-wrapper" v-if="showBackBtn">
        <router-link class="backBtn" to='/'>
            <span class="backBtn-bg"></span>
            <i class="backBtn-arrow iconfont">&#xe624;</i>
        </router-link>
   </div> 
   <div class="header-wrapper" v-else :style="headerOpacity">
        <router-link class="back iconfont" to='/'>
            &#xe624;
        </router-link>
        <h1 class="title">特呈渔岛度假村</h1>
   </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data(){
        return {
            showBackBtn: true,
            headerOpacity: {
                opacity: 0
            }
        }
    },
    methods: {
        showHeader(flag){
            this.showBackBtn = flag;
        },
        scrollEvent(){
            let top = document.documentElement.scrollTop;
            if(top > 0){
                let opacity = top / 160;
                opacity = opacity > 1 ? 1 : opacity;
                this.$set(this.headerOpacity, 'opacity', opacity);
                this.showHeader(false); 
            }else{
                this.showHeader(true);
            }
        }
    },
    activated() {
        window.addEventListener('scroll', this.scrollEvent, false);
    },
    deactivated() {
        window.removeEventListener('scroll', this.scrollEvent, false);   
    }
}   
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .header-wrapper
        position: fixed
        top: 0
        left: 0
        width: 100%
        z-index: 2
        height: .88rem
        background: #00bcd4
        .backBtn
            width: .72rem
            position: absolute
            left: .1rem
            top: .1rem
            line-height: .72rem
        .backBtn-bg
            background-color: #000
            opacity: 0.5
            height: .72rem
            display: block
            border-radius: 50%
        .backBtn-arrow
            position: absolute
            left: 0
            top: 0
            color: #fff
            width: .72rem /* 如果center不好看，左对齐加indent */
            text-align: center
        .back
            color: #fff
            font-size: .36rem
            text-align: center
            width: .8rem
            height: .88rem
            line-height: .88rem
            position: absolute
        .title
            margin: 0 1rem
            line-height: .88rem
            font-size: .32rem
            text-align: center
            color: #fff
            ellipsis()
    .backBtn-wrapper
        background: transparent
</style>
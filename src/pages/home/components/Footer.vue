<template>
    <div class="footer-wrapper">
        <div :class="['icon-nav-wrapper', {seeMore: isSeeMore}]">
            <ul class="icon-nav">
                <li class="icon-nav-item" v-for="icon in icons">
                    <a>
                        <i class="icon" :style="{backgroundPosition: getBgPos(icon.pos)}"></i>
                        <span class="title">{{ icon.title }}</span>
                    </a>
                </li>
                <div :class="['see-more-wrapper', {active: isSeeMore}]">
                    <a class="see-more" @click="handleSeeMoreClick">
                        <i class="iconfont see-more-icon" v-html="getSeeMoreIcon()"></i>
                        更多
                    </a>
                </div>
            </ul>
        </div>
        <ul class="footer-nav">
            <li class="footer-nav-item"><a>登录</a></li>
            <li class="footer-nav-item"><a>我的订单</a></li>
            <li class="footer-nav-item"><a>最近浏览</a></li>
            <li class="footer-nav-item"><a>关于我们</a></li>
        </ul>
    </div>
</template>

<script>
export default{
    name: 'HomeFooter',
    data: function(){
        return {
            icons: [
                {
                    pos: [0, 0],
                    title: "机票"
                },
                {
                    pos: [-25, 0],
                    title: "酒店"
                },
                {
                    pos: [-150, 0],
                    title: "公寓"
                },
                {
                    pos: [-50, 0],
                    title: "团购"
                },
                {
                    pos: [-50, -25],
                    title: "火车票"
                },
                {
                    pos: [-75, 0],
                    title: "景点"
                },
                {
                    pos: [-100, 0],
                    title: "接送机"
                },
                {
                    pos: [0, -25],
                    title: "度假"
                },
                {
                    pos: [-75, -25],
                    title: "攻略"
                },
                {
                    pos: [-100, -25],
                    title: "旅图"
                },  
                {
                    pos: [-125, 0],
                    title: "车车"
                },
                {
                    pos: [-125, -25],
                    title: "当地人"
                }
            ],
            seeMore: {

            },
            isSeeMore: false
        };
    },
    methods: {
        getBgPos: function(pos){
            return pos[0] + 'px ' + pos[1] + 'px'
        },
        handleSeeMoreClick: function(){
            this.isSeeMore = !this.isSeeMore
        },
        getSeeMoreIcon: function(){
            return this.isSeeMore ? '&#xe69b;' : '&#xe601'
        }
    },
}
</script>

<style lang="stylus" scoped>
    .icon-nav-wrapper
        padding-top: .4rem
        width: 300px
        margin: 0 auto
        height: 25px
        transition: all .2s
        overflow: hidden
    .seeMore    
        height: 120px
    .icon-nav
        position: relative
    .see-more-wrapper
        position: absolute
        width: 70px
        top: 0px
        right: 20px
        height: 32px
        line-height: 20px
        background: #f3f3f3
        font-size: 14px;
        cursor: pointer
        &.active
            top: unset
        .see-more
            color: #9e9e9e
            padding-left: 10px
            border-left: 1px solid #9e9e9e
            .see-more-icon
                font-size: 12px
    .icon-nav-item
        display: inline-block
        padding-right: .1rem
        width: 65px
        padding-bottom: .2rem
        a
            display: block
            height: 22px
            font-size: 12px
        .icon
            width: 22px
            height: 22px
            display: inline-block
            background: url(../../../assets/images/nav-icon.png) 0 0 no-repeat
            background-size: 175px 50px
            vertical-align: middle
        .title
            color: #9e9e9e
            padding-top: 3px
            padding-right: 5px
            text-decoration: underline
    .footer-nav
        padding-top: .4rem
        padding-bottom: .6rem
        border-bottom: 1px solid #cacaca
        .footer-nav-item
            float: left
            margin: auto .25rem auto .25rem
            a
                display: block
</style>
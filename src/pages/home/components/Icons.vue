<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) in  pages" :key="index">
                <div class="icon" v-for="icon in page" :key="icon.id">
                    <img :src="icon.imgUrl" />
                    <p>{{ icon.tag }}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper> 
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data: function(){
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            },
            icons: [
                {
                    id: "0001",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    tag: "景点门票"
                },
                {
                    id: "0002",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png",
                    tag: "海滨海岛"
                },
                {
                    id: "0003",
                    imgUrl: "https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
                    tag: "打卡圣地"
                },
                {
                    id: "0004",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png",
                    tag: "两江夜游"
                },
                {
                    id: "0005",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",
                    tag: "自然风光"
                },
                {
                    id: "0006",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
                    tag: "温泉"
                },
                {
                    id: "0007",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/48/cb72b99b71974c02.png",
                    tag: "生活休闲"
                },
                {
                    id: "0008",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
                    tag: "玩转长隆"
                },
                {
                    id: "0009",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/90/59a2f523ee2f9202.png",
                    tag: "农家度假"
                },
                {
                    id: "0010",
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png",
                    tag: "全部玩乐"
                }
            ]
        }
    },
    computed: {
        pages: function(){
            const icons = this.icons;
            const pages = [];
            icons.forEach(function(icon, idx){
                const pageIdx = Math.floor(idx / 8);
                if(!pages[pageIdx]){
                    pages[pageIdx] = [];
                }
                pages[pageIdx].push(icon);
            });
            return pages;
        }
    }
}  
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .wrapper >>> .swiper-pagination-bullet-active
        background: #00afbecc
    .wrapper >>> .swiper-pagination-bullets
        bottom: -.1rem
    .wrapper
        width: 100%
        height: 0
        padding-bottom: 52%
        overflow: hidden
        .icon 
            float: left
            width: 25%
            height: 0
            padding: 0 .3rem
            padding-bottom: 25%
            box-sizing: border-box
            text-align: center
            overflow: hidden   
            img
                width: 100%
                display: block
                margin-bottom: .1rem  
            p
                ellipsis()  
                 
</style>
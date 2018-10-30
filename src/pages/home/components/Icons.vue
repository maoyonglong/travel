<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
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
    props: {
        list: Array
    },
    data(){
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            }
        }
    },
    computed: {
        pages(){
            const icons = this.list;
            const pages = [];
            icons.forEach(function(icon, idx){
                const pageIdx = Math.floor(idx / 8);
                if(!pages[pageIdx]){
                    pages[pageIdx] = [];
                }
                pages[pageIdx].push(icon);
            });
            return pages;
        },
        showSwiper(){
            return this.list.length;
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
    .wrapper >>> .swiper-container
        overflow: unset
    .wrapper
        width: 100%
        height: 0
        padding-bottom: 52%
        overflow: hidden
        background: #fff;
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
<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item in list" :key="item.id">
                <img :src="item.imgUrl" :alt="item.alt"/> 
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper> 
    </div>  
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data(){
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            } 
        };
    },
    computed: {
        showSwiper(){
            return this.list.length;
        },
        close
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper
        width: 100%
        height: 0
        padding-bottom: 26.67%
        overflow: hidden
        img
            width: 100%    
</style>
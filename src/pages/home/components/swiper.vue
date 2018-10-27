<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide>
                <img src = "http://img1.qunarzz.com/piao/fusion/1809/ae/7518c2fbc1415202.jpg_750x200_09bbe391.jpg"/> 
            </swiper-slide>
            <swiper-slide>
                <img src = "http://img1.qunarzz.com/piao/fusion/1810/a8/664024556572fd02.jpg_750x200_ffe41025.jpg"/> 
            </swiper-slide>
            <swiper-slide>
                <img src = "http://img1.qunarzz.com/piao/fusion/1810/e2/2e3774e52b380102.jpg_750x200_14e6ebab.jpg" />
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper> 
    </div>  
</template>

<script>
export default {
    name: 'HomeSwiper',
    data(){
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            }
        };
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper
        width: 100%
        height: 0
        padding-bottom: 31.25%
        overflow: hidden
        img
            width: 100%    
</style>
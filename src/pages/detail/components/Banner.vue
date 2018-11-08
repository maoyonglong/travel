<template>
   <div class="banner-wrapper">
        <img class="banner-img" src="//img1.qunarzz.com/sight/p0/201212/19/3320e43ab4b9cb0493835fbb.jpg_600x330_984516bb.jpg" />
        <div class="swiper-num-wrapper" @click="handleShowGallery">
            <i class="swiper-num-icon iconfont">&#xe76b;</i>
            <span class="swiper-num">8</span>
        </div>
        <div class="banner-title-wrapper">
            <h1 class="banner-title">
                特呈渔岛度假村
            </h1>
        </div>
        <common-gallery 
            :imgs="galleryImgs"
            v-show="showGallery"
            @closeGallery="handleCloseGallery"
        ></common-gallery>
   </div> 
</template>

<script>
import CommonGallery from 'common/gallery/Gallery';
export default {
    name: 'DetailBanner',
    data(){
        return {
            showGallery: false,
            galleryImgs: [
                'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
                'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png'
            ]
        }
    },
    components: {
        CommonGallery
    },
    methods: {
        handleShowGallery(){
            this.showGallery = true;
        },
        handleCloseGallery(){
            this.showGallery = false;
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner-wrapper
        position: relative
        width: 100%
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
            vertical-align: top
    .swiper-num-wrapper
        position: absolute
        width: 1.2rem
        height: .4rem
        line-height: .4rem;
        border-radius: .2rem;
        font-size: .24rem;
        color: #fff;
        left: .2rem
        bottom: .86rem
        background-color: rgba(0,0,0,.5)
        text-align: center
        .swiper-num-icon
            display: inline-block
            vertical-align: top // 如果觉得不好看，relative加top 
    .banner-title-wrapper
        position: absolute
        right: .2rem;
        bottom: .36rem;
        left: .2rem;
        min-height: .4rem;
        .banner-title
            line-height: .4rem
            color: #fff
            font-size: .36rem
            text-shadow: 0 1px 2px rgba(0,0,0,0.70);
</style>
<template>
    <div class="gallery-container"> 
        <div class="bg" @click="handleClick"></div>
        <div class="gallery-wrapper">
            <!-- options要加在swiper上 -->
            <swiper :options="swiperOptions">
                <swiper-slide v-for="img in imgs" :key="img">
                    <img class="gallery-img" :src="img" />
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallery',
    props: {
        imgs: {
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                loop: true,
                observeParents: true,
                observer: true
            },
            
        };
    },
    methods: {
        handleClick(){
            this.$emit('closeGallery');
        }
    }
}   
</script>

<style lang="stylus" scoped>
    .gallery-container
        width: 100%
        height: 100%
        position: fixed
        top: 0
        bottom: 0
        left: 0
        right: 0
        z-index: 99
        display: flex
        flex-direction: column
        justify-content: center
        background: #000
        .bg
            width: 100%
            height: 100%
            position: absolute
        .gallery-wrapper 
            width: 100%
            height: 0
            padding-bottom: 100%
            .gallery-img
                width: 100%
</style>
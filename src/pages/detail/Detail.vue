<template>
    <div class="detail-wrapper">
        <detail-banner></detail-banner>
        <keep-alive>
            <detail-header></detail-header>
        </keep-alive>  
    </div>
</template>

<script>
import DetailBanner from './components/Banner';
import DetailHeader from './components/Header';
export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader
    }
}; 
</script>

<style lang="stylus" scoped>
    .detail-wrapper
        height: 1000px
</style>
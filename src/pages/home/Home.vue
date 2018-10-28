<template>
    <div class="page">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-tools></home-tools>
        <p>123</p>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeTools from './components/SmallTools'
export default {
    name: 'home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeTools
    }
}
</script>

<style lang="stylus" scoped>
    .page{
        background-color: #f5f5f5
    }
</style>

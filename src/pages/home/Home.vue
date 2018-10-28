<template>
    <div class="page">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-tools></home-tools>
        <home-activities></home-activities>
        123
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeTools from './components/SmallTools'
import HomeActivities from './components/Activities'
export default {
    name: 'home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeTools,
        HomeActivities
    }
}
</script>

<style lang="stylus" scoped>
    .page{
        background-color: #f5f5f5
    }
</style>

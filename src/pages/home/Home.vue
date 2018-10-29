<template>
    <div class="page">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-tools></home-tools>
        <home-activities></home-activities>
        <home-hotmeau></home-hotmeau>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br />
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeTools from './components/SmallTools'
import HomeActivities from './components/Activities'
import HomeHotmeau from './components/HotMenu'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
    name: 'home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeTools,
        HomeActivities,
        HomeHotmeau,
        HomeRecommend,
        HomeWeekend
    }
}
</script>

<style lang="stylus" scoped>
    .page{
        background-color: #f5f5f5
    }
</style>

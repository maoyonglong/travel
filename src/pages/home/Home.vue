<template>
    <div class="page">
        <home-header :city="city"></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-tools></home-tools>
        <home-activities></home-activities>
        <home-hotmenu :list="hotmenuList"></home-hotmenu>
        <home-recommend :lists="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
        <home-footer></home-footer>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeTools from './components/SmallTools'
import HomeActivities from './components/Activities'
import HomeHotmenu from './components/HotMenu'
import HomeRecommend from './components/Recommend'
import HomeFooter from './components/Footer'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
    name: 'home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeTools,
        HomeActivities,
        HomeHotmenu,
        HomeRecommend,
        HomeFooter,
        HomeWeekend
    },
    data(){
        return {
            city: '',
            swiperList: [],
            iconList: [],
            hotmenuList: [],
            recommendList: [],
            weekendList: []
        }
    },
    methods: {
        getHomeInfo(){
            axios.get('/api/index.json').then((res) => {
                res = res.data;
                const data = res.data;
                if(res.ret==='success' && data){
                    this.city = data.city;
                    this.swiperList = data.swiperList;
                    this.iconList = data.iconList;
                    this.hotmenuList = data.hotmenuList;
                    this.recommendList = data.recommendList;
                    this.weekendList = data.weekendList;
                }
            });
        }
    },
    mounted(){
        this.getHomeInfo();
    }
}
</script>

<style lang="stylus" scoped>
    .page{
        background-color: #f5f5f5
    }
</style>

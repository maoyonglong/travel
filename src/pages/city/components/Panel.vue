<template>
    <div class="city-panel" ref="wrapper">
        <ul class="city-menu">
            <li class="menu-item" >
                <h4 class="title">热门城市</h4>
                <menu-panel :list="hotCities" :col="3"></menu-panel>              
            </li>
            <li class="menu-item">
                <h4 class="title">字母排序</h4>
                <char-menu-panel :list="character"
                     class="character" 
                     v-if="character.length > 0"
                     @scrollToChar="handleScrollClick">
                </char-menu-panel>
            </li>
            <li class="menu-item" v-for="(charCities, key) in cities" :key="key" ref="char">
                <h4 class="title" >{{ key }}</h4>
                <menu-panel :list="charCities" :col="4"></menu-panel>
            </li>
        </ul>
    </div>
</template>

<script>
import MenuPanel from './MenuPanel'
import CharMenuPanel from './CharMenuPanel'
import BScroll from 'better-scroll'
export default {
    name: 'CityPanel',
    props: {
        hotCities: Array,
        cities: Object
    },
    computed: {
        character() {
            var result = [];
            for(var key in this.cities){
                result.push({id:key, name: key})
            }
            return result;
        }
    },
    components: {
        MenuPanel,
        CharMenuPanel
    },
    updated() {
        let wrapper = this.$refs.wrapper;
        this.scroll = new BScroll(wrapper);
       
    },
    methods: {
        handleScrollClick(index) {
            console.log(index)
            let city = this.$refs.char[index];
            console.log(city)
            this.scroll.scrollToElement(city);
        }
    }
}
</script>

<style lang="stylus" scoped>
    .city-panel
        width: 100%
        height: 90% // why? height等于100%-header的高就可以了？
        top: 74px
        position: absolute
        .menu-item
            background: #f5f5f5
            overflow: hidden
            .title
                font-size: .24rem
                margin: .24rem .3rem
    .character
        padding-top: 15px
    .character >>> .menu-panel-optn
        border: 0
</style>
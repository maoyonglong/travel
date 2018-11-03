<template>
    <header class="city-header">
        <h2 class="title">
            <i class="iconfont icon">&#xe624;</i>
            <span class="select-city">城市选择</span>
        </h2>
        <div class="switch-area-wrapper">
            <div class="switch-area clearfix"> 
                <a  v-for="(tab, index) in tabs" 
                    :key="index"
                    :class="['area-optns', {active: currentTab===tab}]"
                    @click="activeTab(tab)">
                    {{ tab }}
                </a>
            </div>
        </div>
    </header>
</template>

<script>
 export default {
    name: 'CityHeader',
    data(){
        return {
            currentTab: '境内',
            tabs: ['境内', '境外·港澳台']
        };
    },
    methods: {
        activeTab(tab){
            this.currentTab = tab;
        }
    }
 }   
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl';
    .city-header
        background-color: $bgColor
        position: fixed;
        z-index: 999;
        width: 100%;
        .title
            color: #fff
            line-height: .88rem
            font-size: .32rem
            height: 32px
            .icon
                position: absolute
                margin-left: .4rem
            .select-city
                display: block
                text-align: center
        .switch-area-wrapper
            line-height: .4rem
            padding: .2rem 1rem
        .switch-area
            border: 1px solid #fff
            border-radius: .03rem
            .area-optns
                color: #fff
                width: 50%;
                float: left;
                text-align: center
                font-size: .28rem;
            .active
                background: #fff
                color: #00bcd4
                
</style>
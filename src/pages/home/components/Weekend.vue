<template>
    <div class="weekend-wrapper">
        <h3 class="weekend-title">周末去哪儿</h3>
        <div class="scence-wrapper" v-for="scence in list">
            <img class="scence-img" :src="scence.imgUrl" />
            <strong class="scence-name">{{ scence.name }}</strong>
            <p class="scence-desc">{{ scence.desc }}</p>
        </div>
        <p class="warning">
            <i class="iconfont warning-icon">&#xe641;</i>
            票面价是指通过景区指定窗口售卖的纸质门票上标注的价格
        </p>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        list: Array
    }
}    
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .weekend-title
        padding-left: .26rem
        color: #212121
        line-height: .8rem
    .scence-wrapper
        background-color: #fff  
        .scence-img 
            width: 100%
        .scence-name
            display: block
            font-size: .28rem
            line-height: .48rem  
            padding-top: .1rem
            padding-bottom: .1rem 
        .scence-desc
            font-size: .24rem
            line-height: .24rem
            color: #616161
            padding-bottom: .4rem
        .scence-name, .scence-desc
            padding-left: .26rem      
    .warning
        padding-left: .3rem
        margin-top: .3rem
        padding-top: .2rem
        padding-bottom: .2rem
        background-color: #fff   
        font-size: .24rem
        line-height: .32rem
        color: #616161  
        ellipsis()
        .warning-icon
            font-size: .24rem 
</style>
<template>
    <div class="header">
        <div class="header-left">
            <i class="iconfont">&#xe624;</i>
        </div>
        <div class="header-input">
            <i class="iconfont">&#xe632;</i>
            输入城市/景点/游玩主题    
        </div>
        <div class="header-right">
            <router-link to='/city' style="color: #fff;">
                {{ getCurCity() }}
            </router-link>
            <i class="iconfont">&#xe62d;</i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader',
    props: {
        city: String
    },
    methods: {
        getCurCity(){
            return this.$store.state.curCity;
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    @import '~styles/variables.styl'
    .header
        display: flex
        line-height: .86rem
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            text-align: center
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            background: #fff
            border-radius: .1rem
            color: #ccc
            padding-left: .1rem
        .header-right
            width: 1.24rem
            float: right
            text-align: center
            a, i
                display: inline-block
                vertical-align: middle
            a
                width: 0.6rem
                ellipsis()
</style>
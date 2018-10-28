<template>
    <ul class="tools-wrapper">
        <li class="tool">
            <i class="iconfont">&#xe65d;</i>
            <span>定位失败</span>
        </li>
        <li class="tool">
            <i class="iconfont">&#xe642;</i>
            <span>玩水季</span>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'HomeRecommend'
}
</script>

<style lang="stylus" scoped>
    .tools-wrapper
        display: flex
        background: #fff
        margin-top: .1rem
        margin-bottom: .3rem
        .tool
            flex: 1
            border-top: 1px solid #f0f0f0
            border-left: 1px solid #f0f0f0
            text-align: center
            padding-top: .32rem
            padding-bottom: .32rem
            span 
                color: #212121
        .tool:nth-child(1)
            border-left: 0
</style>
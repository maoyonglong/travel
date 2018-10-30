<template>
    <div class="city-panel">
        <ul class="city-menu">
            <li class="menu-item">
                <h4 class="title">热门城市</h4>
                <menu-panel v-bind="hotCity"></menu-panel>
                <h4 class="title">字母排序</h4>
                <menu-panel v-bind="character" class="character"></menu-panel>
                <h4 class="title">A</h4>
                <menu-panel v-bind="A"></menu-panel>
            </li>
        </ul>
    </div>
</template>

<script>
import MenuPanel from './MenuPanel'
export default {
    name: 'CityPanel',
    data(){
        return {
            hotCity: {
                col: 3,
                list: ['北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京']
            },
            character: {
                col: 6,
                list: [
                    'A', 'B', 'C', 'D', 'E', 'F',
                    'G', 'H', 'J', 'K', 'L', 'M', 
                    'N', 'P', 'Q', 'R', 'S', 'T',
                    'W', 'X', 'Y', 'Z'
                ]
            },
            A: {
                col: 4,
                list: [
                    '阿拉尔','阿拉尔','阿拉尔','阿拉尔',
                    '阿拉尔','阿拉尔','阿拉尔','阿拉尔',
                    '阿拉尔','阿拉尔','阿拉尔','阿拉尔'
                ]
            }
        };
    },
    components: {
        MenuPanel
    }
}
</script>

<style lang="stylus" scoped>
    .city-panel
        background: #f5f5f5
        .menu-item
            overflow: hidden
            .title
                font-size: .24rem
                margin: .24rem .3rem
    .character
        padding-top: 15px
    .character >>> .menu-panel-optn
        border: 0
</style>
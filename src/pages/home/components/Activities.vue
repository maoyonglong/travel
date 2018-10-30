<template>
    <ul class="activities-wrapper">
        <li class="activity" 
            v-for="item in list" 
            :key="item.id" 
            :style="{backgroundImage: getImageUrl(item.imgUrl)}">
        </li>
    </ul>   
</template>

<script>
export default {
    name: 'HomeActivities',
    data(){
        return {
            list: [{
                id: "0001",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png"
            },{
                id: "0002",
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1809/b7/00000ce26b312902.png"
            }]
        };
    },
    methods: {
        getImageUrl(url){
            return 'url(' + url + ')';
        }
    }
}   
</script>

<style lang="stylus" scoped>
    .activities-wrapper
        background-color: #fff
        display: flex
        margin-bottom: .3rem
    .activity
        flex: 1
        background-repeat: no-repeat
        background-position: center center
        background-size: auto 100%
        height: 1.4rem
        border-top: 1px solid #f0f0f0
        border-left: 1px solid #f0f0f0
        &:nth-child(1)
            border-left: 0
</style>
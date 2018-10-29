<template>
    <div class="weekend-wrapper">
        <h3 class="weekend-title">周末去哪儿</h3>
        <div class="scence-wrapper" v-for="scence in scences">
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
    data: function(){
        return {
            scences: [{
                imgUrl: "http://img1.qunarzz.com/sight/source/1509/bc/50eb743f47cec5.jpg_r_640x214_fa1b0019.jpg",
                name: "湛江必游TOP5",
                desc: "中国海军南海舰队司令部所在地，够酷"
            },{
                imgUrl: "http://img1.qunarzz.com/sight/source/1509/bc/50eb743f47cec5.jpg_r_640x214_fa1b0019.jpg",
                name: "湛江必游TOP5",
                desc: "中国海军南海舰队司令部所在地，够酷"
            },{
                imgUrl: "http://img1.qunarzz.com/sight/source/1509/bc/50eb743f47cec5.jpg_r_640x214_fa1b0019.jpg",
                name: "湛江必游TOP5",
                desc: "中国海军南海舰队司令部所在地，够酷"
            },{
                imgUrl: "http://img1.qunarzz.com/sight/source/1509/bc/50eb743f47cec5.jpg_r_640x214_fa1b0019.jpg",
                name: "湛江必游TOP5",
                desc: "中国海军南海舰队司令部所在地，够酷"
            },{
                imgUrl: "http://img1.qunarzz.com/sight/source/1509/bc/50eb743f47cec5.jpg_r_640x214_fa1b0019.jpg",
                name: "湛江必游TOP5",
                desc: "中国海军南海舰队司令部所在地，够酷"
            }]
        };
    }
}    
</script>

<style lang="stylus" scoped>
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
        padding-left: .24rem
        margin-top: .2rem
        background-color: #fff   
        font-size: .24rem;
        line-height: .32rem;
        color: #616161;   
        .warning-icon
            font-size: .24rem 
</style>
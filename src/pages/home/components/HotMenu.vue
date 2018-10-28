<template>
   <div class="hotmenu-wrapper">
        <h2 class="title">
            <i class="iconfont icon">&#xe63e;</i>
            本周热门榜单
            <span class="see-all">
                全部榜单
                <i class="iconfont">&#xe62e;</i>
            </span>
        </h2>
        <ul class="list-wrapper">
            <li class="item" v-for="(item, index) in list" :key="item.id">
                <div class="img-wrapper">
                    <div v-if="index < 3" class="top-wrapper">
                        <img class="top" :src="tops[index]"/>
                    </div>
                    <img class="pic" :src="item.imgUrl" />
                </div>
                <p class="address">{{ item.address }}</p>
                <p class="price-wrapper">
                    <span class="price">￥{{ item.price }}</span>
                    起
                </p>
            </li>
        </ul>
   </div> 
</template>

<script>
export default {
    name: 'HomeHotmenu',
    data: function(){
        return {
            tops: [
                "http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png",
                "http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png",
                "http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png"
            ],
            list: [{
                id: "0001",
                imgUrl: "http://img1.qunarzz.com/sight/p0/1701/d7/d79ce098933ceeaa3.water.jpg_250x250_5e726ef2.jpg",
                address: "乐8小城湛江店",
                price: 27
            },{
                 id: "0002",
                imgUrl: "http://img1.qunarzz.com/sight/p0/1701/d7/d79ce098933ceeaa3.water.jpg_250x250_5e726ef2.jpg",
                address: "乐8小城湛江店",
                price: 27
            },{
                 id: "0003",
                imgUrl: "http://img1.qunarzz.com/sight/p0/1701/d7/d79ce098933ceeaa3.water.jpg_250x250_5e726ef2.jpg",
                address: "乐8小城湛江店",
                price: 27
            },{
                 id: "0004",
                imgUrl: "http://img1.qunarzz.com/sight/p0/1701/d7/d79ce098933ceeaa3.water.jpg_250x250_5e726ef2.jpg",
                address: "乐8小城湛江店",
                price: 27
            },{
                id: "0005",
                imgUrl: "http://img1.qunarzz.com/sight/p0/1701/d7/d79ce098933ceeaa3.water.jpg_250x250_5e726ef2.jpg",
                address: "乐8小城湛江店",
                price: 27
            },{
                id: "0006",
                imgUrl: "http://img1.qunarzz.com/sight/p0/1701/d7/d79ce098933ceeaa3.water.jpg_250x250_5e726ef2.jpg",
                address: "乐8小城湛江店",
                price: 27
            },{
                id: "0007",
                imgUrl: "http://img1.qunarzz.com/sight/p0/1701/d7/d79ce098933ceeaa3.water.jpg_250x250_5e726ef2.jpg",
                address: "乐8小城湛江店",
                price: 27
            }]
        };
    }
}    
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .hotmenu-wrapper
        background-color: #fff
        padding-left: .24rem
        margin-bottom: .3rem
        .title
            padding-top: .3rem
            padding-bottom: .3rem
            font-size: .32rem
            color: #212121;
            .icon
                color: #ff8643
            .see-all
                float: right
                color: #616161;
                font-size: .24rem
                margin-right: .2rem
                .iconfont
                    font-size: .24rem
                    color: #616161;
                    vertical-align: top
        .list-wrapper
            width: 100%
            overflow-x: scroll
            white-space: nowrap
            padding-bottom: .2rem
            .item
                width: 2rem
                text-align: center
                margin-right: .2rem
                display: inline-block
                .img-wrapper
                    position: relative
                    margin-bottom: .1rem
                    .top-wrapper
                        width: .84rem
                        position: absolute
                    img
                        width: 100%
                .address
                    ellipsis()
            .price-wrapper
                color: #212121;
                font-size: .24rem
                line-height: .4rem
                .price
                    color: #ff8300
                    font-size: .28rem

</style>

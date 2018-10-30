<template>
    <div class="recommend-wrapper">
        <h2 class="title">
            <i class="iconfont icon">&#xe602;</i>
            猜你喜欢
        </h2>
        <ul class="recommend-list-wrapper">
            <li class="recommend-list" v-for="(list, index) in lists" :key="index">
                <ul class="recommend-item-wrapper">
                    <li class="recommend-item clearfix" v-for="item in list" :key="item.id">
                        <div class="img-wrapper">
                            <div class="tag" v-if="item.tagKind >= 0" :style="{backgroundImage: getTagUrl(item.tagKind)}">{{ getTagText(item.tagKind) }}</div>
                            <img :src="item.imgUrl"/>
                        </div>
                        <div class="info">
                            <p class="address">{{ item.address }}</p>
                            <div class="comment">
                                <p class="star-wrapper">
                                    <span class="iconfont star comment-star">&#xe6c2;&#xe6c2;&#xe6c2;&#xe6c2;&#xe6c2;</span>
                                    <span class="iconfont star bg-start">&#xe6c2;&#xe6c2;&#xe6c2;&#xe6c2;&#xe6c2;</span>
                                </p>
                                <span class="comment-number">711条评论</span>
                            </div>
                            <p class="price-wrapper">
                                <span class="price">
                                    ￥{{ item.price }}
                                </span>
                                起
                                <span class="area">
                                    {{ item.area }}
                                </span>
                            </p>
                        </div>
                    </li>
                    <p class="summary">🔥好评如潮，小伙伴热推景点~</p>
                </ul>
            </li>
        </ul>
        <a class="see-all">查看所有商品</a>
    </div>   
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        lists: Array
    },
    data(){
        return {
            tags: [
                {
                    imgUrl: "https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png",
                    text: "随买随用" 
                },
                {
                    imgUrl: "https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png",
                    text: "可订明日"
                },
                {
                    imgUrl: "https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png",
                    text: "可定今日"
                }
            ],
        };
    },
    methods: {
        getTagUrl(kind){
            return 'url(' + this.tags[kind].imgUrl + ')';
        },
        getTagText(kind){
            return this.tags[kind].text;
        }
    }
}    
</script>

<style lang="stylus" scoped>
    .recommend-wrapper
        background: #fff
        padding-left: .24rem
        .title
            font-size: .32rem
            padding-top: .3rem
            padding-bottom: .3rem
            color: #212121;
            .icon
                color: #ff565e
        .recommend-item
            padding-top: .2rem
            padding-bottom: .2rem
            border-bottom: 1px solid #f0f0f0
            overflow: hidden
            &:nth-last-child(2)
                border-bottom: 0
            .img-wrapper
                float: left
                width: 2rem
                margin-right: .2rem
                position: relative
                .tag
                    position: absolute
                    width: 1.02rem
                    height: .38rem
                    background-size: 100%
                    color: #fff
                    font-size: .2rem
                    line-height: .38rem
                    text-indent: .04rem
                img
                    width: 100%     
            .info
                .address
                    color: #212121
                    font-size: .32rem
                    line-height: .44rem
                    margin-top: .26rem
                .comment
                    line-height: .34rem
                    margin-top: .14rem
                    .star-wrapper
                        width: 1.5rem;
                        height: .28rem;
                        position: relative
                        display: inline-block
                        .star
                            position: absolute
                            font-size: .28rem
                            letter-spacing: .02rem
                        .comment-star
                            color: #ffb436
                            z-index: 1
                .price-wrapper
                    line-height: .4rem
                    margin-top: .22rem
                    .price
                        color: #ff8300
                        font-size: .4rem
                    .area
                        margin-right: .2rem
                        font-size: .24rem
                        float: right
        .recommend-list:last-child .summary
            display: none
        .summary
            margin-top: .1rem
            padding-bottom: .2rem
            text-align: center
            color: #f55
            font-size: .24rem
            line-height: .34rem
            border-bottom: 1px solid #f0f0f0
        .see-all
            display: block
            padding: .2rem 0;
            color: #00afc7;
            font-size: .28rem;
            line-height: .4rem;
            text-align: center;
            border-top: 1px solid #f0f0f0

</style>
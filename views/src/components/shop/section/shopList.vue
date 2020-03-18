<template>
    <div class="shop-list">
        <!-- 商品列表 -->
        <ul class="list-content">
            <li class="commodity-box" v-for="item in commodityList" :key="item.id">
                <!-- 商品图片 -->
                <img class="commodity-image" v-lazy="'/api/' + item.commodityImg">
                <div class="commodity-content">
                    <!-- 商品标题 -->
                    <div class="content-title">{{item.commodityName}}</div>
                    <!-- 商品简介 -->
                    <div class="content-info">{{item.commodityInfo}}</div>
                    <!-- 价格以及购物车图标 -->
                    <div class="content-shop">
                        <PriceBox :commodity="item"></PriceBox>
                        <div class="shop-cart">
                            <van-icon name="cart-circle" @click="plusCommodity(item)"/>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            commodityList: [], //商品列表
        }
    },
    computed: {
        ...mapGetters([
            'cartList'
        ]),
    },
    created() {
        this.getRandomCommodity()
    },
    methods: {
        // 获取随机N条商品信息
        getRandomCommodity() {
            this.$axios.post('/commodity/getRandomCommodity', {size: 8}).then(res => {
                this.commodityList = res.data.commodityList
            }).catch(err => {
                console.log(err)
            })
        },
        // 加入购物车
        plusCommodity(item) {
            // 判断购物车折扣商品是否超出上限
            if(!this.$util.canPlusCommodity(item, this.cartList)) {
                this.$toast('折扣商品最多只能购买2件')
                return
            }
            // 改变store中商品数量
            this.$store.commit('PLUS_COMMODITY', item)
            // 生成一个球
            this.$setDropBalloon()
        },
    }
}
</script>

<style lang="less" scoped>
.shop-list{
    width: 100%;
    .list-content{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 15px;
        padding: 0 20px;
        .commodity-box{
            display: flex;
            flex-direction: column;
            width: 345px;
            background: #FFF;
            margin-bottom: 15px;
            border-radius: 10px;
            .commodity-image{
                width: 345px;
                height: 345px;
            }
            .commodity-content{
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                padding: 14px;
                .content-title{
                    font-size: 28px;
                    font-weight: bold;
                }
                .content-info{
                    margin: 10px 0 20px;
                    font-size: 26px;
                    color: #999;
                    letter-spacing: 1px;
                }
                .content-shop{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: auto;
                    .shop-cart{
                        display: flex;
                        align-items: center;
                        .van-icon{
                            font-size: 60px;
                            color: #00AAEE;
                        }
                    }
                }
            }
        }
    }
}
</style>

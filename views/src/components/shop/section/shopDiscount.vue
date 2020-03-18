<template>
    <div class="shop-discount">
        <div class="discount-title">折扣专区</div>
        <swiper :options="swiperOption">
            <!-- 滑动区域 -->
            <swiper-slide v-for="item in this.commodityList" :key="item.id">
                <!-- 商品图片 -->
                <div class="commodity-image">
                    <img :src="'/api/' + item.commodityImg">
                </div>
                <div class="commodity-content">
                    <!-- 商品标题 -->
                    <div class="content-title">{{item.commodityName | longName}}</div>
                    <!-- 价格以及购物车图标 -->
                    <div class="content-shop">
                        <PriceBox :commodity="item"></PriceBox>
                        <div class="shop-cart">
                            <van-icon name="cart-circle" @click="plusCommodity(item)"/>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    filters: {
        // 过滤器,名字过长时省略显示
        longName(val) {
            if(val.length > 18){
                return val.slice(0, 16) + '...'
            }
            return val
        }
    },
    data() {
        return {
            commodityList: [], //商品列表
            swiperOption: {
                slidesPerView: 2.5
            }
        }
    },
    computed: {
        ...mapGetters([
            'cartList'
        ])
    },
    created() {
        this.getDiscountCommodity()
    },
    methods: {
        // 获取打折商品信息
        getDiscountCommodity() {
            this.$axios.post('/commodity/getDiscountCommodity').then(res => {
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
.shop-discount{
    margin-top: 15px;
    padding: 20px;
    background: #FFF;
    // 解决swiper高度不一致问题
    .swiper-slide{
        display: flex;
        flex-direction: column;
        height: auto;
        padding: 0 15px;
        box-sizing: border-box;
    }
    .swiper-slide-active{
        height: auto;
    }
    // 折扣标题
    .discount-title{
        padding-left: 20px;
        border-left: 10px solid #00AAEE;
        line-height: 50px;
        font-size: 36px;
        font-weight: bold;
    }
    .commodity-image{
        width: 284px;
        height: 284px;
        padding: 15px;
        box-sizing: border-box;
        img{
            height: 100%;
            width: 100%;
        }
    }
    .commodity-content{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 14px;
        .content-title{
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 10px;
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
</style>

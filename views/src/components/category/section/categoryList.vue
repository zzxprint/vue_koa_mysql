<template>
    <div class="category-list">
        <!-- 列表 -->
        <ul class="list-content">
            <li v-for="(item, index) in commodity" :key="index" class="commodity-box">
                <div class="img-box" @click="photoView('/api/' + item.commodityImg)">
                    <img v-lazy="'/api/' + item.commodityImg" alt="">
                </div>
                <div class="info-box">
                    <div class="info-title"><span>{{item.commodityName}}</span></div>
                    <div class="info-brief">{{item.commodityInfo}}</div>
                    <div class="shop-box">
                        <PriceBox :commodity="item"></PriceBox>
                        <div class="count-box">
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
import { ImagePreview } from 'vant';
export default {
    data() {
        return {
            commodity: [], //商品列表
        };
    },
    computed: {
        ...mapGetters([
            'categoryId',
            'cartList'
        ]),
    },
    watch: {
        // 当前选择的分类ID
        categoryId() {
            this.getCommodityList(this.categoryId)
        }
    },
    created() {
        // 加载时默认获取商品列表,否则获取缓存列表
        if(this.categoryId == '') {
            this.getCommodityList('1')
        }else {
            this.getCommodityList(this.categoryId)
        }
    },
    methods: {
        // 请求商品信息
        getCommodityList(categoryId) {
            // 先清空数组
            this.commodity = []
            let submitForm = {categoryId: categoryId}
            // 请求商品信息
            this.$axios.post('/commodity/getCommodity',submitForm).then(res => {
                this.commodity = res.data.commodityList
            }).catch(err => {
                console.log(err)
            })
        },
        // 增加一个商品
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
        // 跳转到购物车页面
        gotoCart() {
            this.$router.push('cart')
        },
        // 图片预览
        photoView(url) {
            ImagePreview([url]);
        },
    }
}
</script>

<style lang="less" scoped>
.category-list{
    padding-left: 190px;
    padding-right: 20px;
    background: #FFF;
    // 列表
    .list-content{
        height: auto;
        background: #FFF;
        .commodity-box{
            height: auto;
            padding: 25px 0;
            border-bottom: 2px solid #EEE;
            display: flex;
            align-items: center;
            .img-box{
                height: 160px;
                width: 160px;
                flex-shrink: 0;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .info-box{
                min-height: 160px;
                width: 100%;
                padding-left: 20px;
                .info-title{
                    font-size: 30px;
                    letter-spacing: 1px;
                    line-height: 40px;
                    font-weight: bold;
                }
                .info-brief{
                    margin-top: 10px;
                    letter-spacing: 1px;
                    font-size: 26px;
                    color: #999;
                }
                .shop-box{
                    margin-top: 30px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .count-box{
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
    // 购物车
    .shopping-cart{
        position: absolute;
        bottom: 150px;
        right: 50px;
        color: #00AAEE;
        /deep/.van-info{
            top: -10px;
            padding: 3px 10px;
        }
    }
}
</style>

<template>
    <div class="cart-list">
        <!-- 列表 -->
        <ul class="list-content" v-if="cartTotalCount != 0">
            <van-swipe-cell v-for="(item, index) in cartList" :key="index" :right-width="100">
                <li class="commodity-box">
                    <!-- 是否被选中 -->
                    <div class="select-btn">
                        <van-checkbox v-model="item.selected" checked-color="#00AAEE"></van-checkbox>
                    </div>
                    <!-- 商品图片 -->
                    <div class="img-box">
                        <img :src="'/api/' + item.commodityImg" alt="">
                    </div>
                    <!-- 商品信息 -->
                    <div class="info-box">
                        <div class="info-title"><span>{{item.commodityName}}</span></div>
                        <div class="info-brief">{{item.commodityInfo}}</div>
                        <div class="shop-box">
                            <PriceBox :commodity="item"></PriceBox>
                            <div class="count-box">
                                <svg-icon v-if="item.count>0" @click="minusCommodity(item, index)" icon-class="minus"></svg-icon>
                                <span v-if="item.count>0">{{item.count}}</span>
                                <svg-icon @click="plusCommodity(item, index)" icon-class="plus"></svg-icon>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- 左滑删除 -->
                <template slot="right">
                    <van-button block square type="danger" text="删除" @click="deleteCommodity(item, index)"/>
                </template>
            </van-swipe-cell>
        </ul>
        <!-- 列表为空时 -->
        <div class="list-empty" v-if="cartTotalCount == 0">
            <svg-icon icon-class="emptyShoppingCart"></svg-icon>
            <span>购物车还是空的</span>
            <button @click="toCategory">去逛逛</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
        };
    },
    computed: {
        ...mapGetters([
            'cartList',
            'cartTotalCount'
        ])
    },
    methods: {
        // 删除一个购物车商品
        deleteCommodity(item, index) {
            this.$store.commit('DELETE_COMMODITY', item)
        },
        // 增加一个商品
        plusCommodity(item, index) {
            // 判断购物车折扣商品是否超出上限
            if(!this.$util.canPlusCommodity(item, this.cartList)) {
                this.$toast('折扣商品最多只能购买2件')
                return
            }
            this.$store.commit('PLUS_COMMODITY', item)
        },
        // 减少一个商品
        minusCommodity(item, index) {
            if(item.count == 1){
                this.$dialog.confirm({
                    message: '删除商品？'
                }).then(() => {
                    // 购物车删除一个商品
                    this.$store.commit('DELETE_COMMODITY', item)
                }).catch(() => {})
            }else{
                this.$store.commit('MINUS_COMMODITY', item)
            }
        },
        // 提示去逛逛
        toCategory() {
            this.$router.push('/category')
        }
    }
}
</script>

<style lang="less" scoped>
.cart-list{
    margin-bottom: 201px;
    // 列表
    .list-content{
        height: auto;
        background: #FFF;
        .commodity-box{
            height: auto;
            padding: 25px 20px;
            border-bottom: 2px solid #EEE;
            display: flex;
            align-items: center;
            .select-btn{
                height: 160px;
                width: 80px;
                padding-right: 20px;
                margin-right: 20px;
                flex-shrink: 0;
                border-right: 2px solid #EEE;
                display: flex;
                align-items: center;
                justify-content: center;
            }
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
                        span{
                            width: 40px;
                            padding: 0 10px;
                            font-size: 32px;
                            justify-content: center;
                            text-align: center;
                        }
                        .svg-icon{
                            font-size: 50px;
                        }
                    }
                }
            }
        }
    }
    // 覆盖vant样式
    /deep/ .van-swipe-cell{
        .van-button{
            height: 100%;
            width: 200px;
        }
    }
    // 购物车为空样式
    .list-empty{
        height: 500px;
        width: 500px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -250px;
        margin-top: -250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .svg-icon{
            height: 150px;
            width: 150px;
        }
        span{
            font-size: 30px;
            color: #999;
            margin-top: 40px;
        }
        button{
            margin-top: 40px;
            padding: 20px 50px;
            background: #FAFAFA;
            color: #666;
            font-size: 30px;
            border: 2px solid #999;
            border-radius: 10px;
        }
    }
}
</style>

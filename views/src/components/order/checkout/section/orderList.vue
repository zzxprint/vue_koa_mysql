<template>
    <div class="order-list">
        <!-- 只有一件商品 -->
        <div class="order-single" v-if="cartList.length == 1">
            <div class="order-info">
                <div class="commodity-image">
                    <img :src="'/api/' + cartList[0].commodityImg" >
                </div>
                <div class="commodity-name">
                    <p class="name">{{cartList[0].commodityName}}</p>
                    <p class="info">
                        <span v-if="cartList[0].discountPrice == undefined || cartList[0].discountPrice == ''">单价: ￥{{cartList[0].commodityPrice}}</span>
                        <span v-else>单价: ￥{{cartList[0].discountPrice}}</span>
                        数量: {{cartTotalCount}}
                    </p>
                </div>
            </div>
            <div class="order-price">
                <span>￥{{cartTotalPrice}}</span>
            </div>
        </div>
        <!-- 多件商品 -->
        <div class="order-multiple" v-if="cartList.length > 1">
            <div class="order-images">
                <img v-for="item in cartList" :key="item.id" :src="'/api/' + item.commodityImg">
            </div>
            <div class="more-btn">
                <span>共{{cartTotalCount}}件</span><van-icon name="arrow" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'cartList',
            'cartTotalCount',
            'cartTotalPrice'
        ])
    }
}
</script>

<style lang="less" scoped>
.order-list{
    height: 180px;
    width: 100%;
    margin-top: 20px;
    padding: 25px 20px;
    box-sizing: border-box;
    background: #FFF;
    // 只有一件商品
    .order-single{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .order-info{
            display: flex;
            align-items: center;
            .commodity-image{
                height: 120px;
                width: 120px;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .commodity-name{
                margin-left: 20px;
                .name{
                    font-size: 30px;
                    font-weight: bold;
                }
                .info{
                    margin-top: 20px;
                    font-size: 28px;
                    color: #999;
                }
            }
        }
        .order-price{
            font-size: 30px;
        }
    }
    // 多件商品
    .order-multiple{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .order-images{
            display: flex;
            max-width: 520px;
            overflow: hidden;
            img{
                flex-shrink: 0;
                height: 120px;
                width: 120px;
                padding: 5px;
            }
        }
        .more-btn{
            flex-shrink: 0;
            display: flex;
            font-size: 30px;
            letter-spacing: 2px;
            color: #999;
        }
    }
}
</style>
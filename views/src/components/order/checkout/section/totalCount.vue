<template>
    <div class="total-count">
        <div class="commodity-count"><span>商品合计:</span><span>￥{{cartTotalPrice}}</span></div>
        <div class="commodity-count">
            <span>配送费:</span>
            <span><span class="hint" v-if="cartTotalPrice < 30">(商品合计满30免配送费)</span>￥{{deliveryPrice}}</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'cartTotalPrice'
        ]),
        deliveryPrice() {
            if(this.cartTotalPrice < 30){
                return '5.00'
            }else{
                return '0.00'
            }
        }
    },
}
</script>

<style lang="less" scoped>
.total-count{
    margin-top: 20px;
    padding: 25px 20px;
    width: 100%;
    background: #FFF;
    box-sizing: border-box;
    .commodity-count{
        display: flex;
        justify-content: space-between;
        line-height: 50px;
        font-size: 32px;
        .hint{
            font-size: 26px;
            color: #999;
        }
    }
}
</style>
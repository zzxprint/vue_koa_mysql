<template>
    <!-- 价格表 -->
    <div class="price-box">
        <!-- 无折扣时显示 -->
        <div class="shop-price" v-if="commodity.discountPrice == undefined || commodity.discountPrice == ''">
            <span>￥{{commodity.commodityPrice}}</span>
        </div>
        <!-- 有折扣时显示 -->
        <div class="shop-price" v-if="commodity.discountPrice != undefined && commodity.discountPrice != ''">
            <span>￥{{commodity.discountPrice}}</span>
            <del><span>￥</span><span>{{commodity.commodityPrice}}</span></del>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        commodity: {
            type: Object
        }
    }
}
</script>

<style lang="less" scoped>
.price-box{
    .shop-price{
        display: flex;
        flex-direction: column;
        font-size: 32px;
        color: #00AAEE;
        del{
            font-size: 28px;
            color: #999;
        }
    }
}
</style>
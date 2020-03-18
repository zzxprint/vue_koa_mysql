<template>
    <div class="checkout">
        <div class="content">
            <!-- 头部 -->
            <Header title="结算"></Header>
            <!-- 地址信息 -->
            <user-address></user-address>
            <!-- 订单内的商品 -->
            <order-list></order-list>
            <!-- 优惠券 -->
            <coupon></coupon>
            <!-- 支付方式 -->
            <pay-mode></pay-mode>
            <!-- 合计 -->
            <total-count></total-count>
        </div>
    </div>
</template>

<script>
import userAddress from './section/userAddress'
import orderList from './section/orderList'
import coupon from './section/coupon'
import payMode from './section/payMode'
import totalCount from './section/totalCount'
export default {
    components: {
        'user-address': userAddress,
        'order-list': orderList,
        'coupon': coupon,
        'pay-mode': payMode,
        'total-count': totalCount,
    },
}
</script>

<style>

</style>
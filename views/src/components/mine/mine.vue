<template>
    <div class="mine">
        <!-- 用户基础信息 -->
        <mine-base-info></mine-base-info>
        <!-- 折扣优惠\积分区 -->
        <mine-discount></mine-discount>
        <!-- 订单区 -->
        <mine-orders></mine-orders>
        <!-- 服务功能区 -->
        <mine-service></mine-service>
    </div>
</template>

<script>
import mineBaseInfo from './section/mineBaseInfo'
import mineDiscount from './section/mineDiscount'
import mineOrders from './section/mineOrders'
import mineService from './section/mineService'
export default {
    components: {
        'mine-base-info': mineBaseInfo,
        'mine-discount': mineDiscount,
        'mine-orders': mineOrders,
        'mine-service': mineService
    }
}
</script>

<style lang="less" scoped>

</style>

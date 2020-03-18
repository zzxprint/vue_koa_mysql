<template>
    <div class="cart">
        <!-- 头部 -->
        <Header title="购物车" :showDelete="cartTotalCount!=0"></Header>
        <div class="content">
            <!-- 购物车列表 -->
            <cart-list></cart-list>
            <!-- 订单提交 -->
            <cart-submit></cart-submit>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import cartList from './section/cartList'
import cartSubmit from './section/cartSubmit'
export default {
    components: {
        'cart-list': cartList,
        'cart-submit': cartSubmit
    },
    computed: {
        ...mapGetters([
            'cartTotalCount'
        ]),
    },
    methods: {
        // 返回上一级
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scoped>
</style>

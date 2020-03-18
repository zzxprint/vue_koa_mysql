<template>
    <div class="cart-submit" v-if="cartTotalCount != 0">
        <van-submit-bar
        :price="cartTotalPrice*100"
        button-text="去结算"
        @submit="gotoOrder"
        >
            <van-checkbox v-model="checked">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'cartTotalPrice',
            'cartAllSelected',
            'cartTotalCount'
        ]),
        checked: {
            get() {
                return this.cartAllSelected
            },
            set(val) {
                this.$store.commit('CHECKALL_COMMODITY', val)
            }
        }
    },
    methods: {
        gotoOrder() {
            this.$router.push('order')
        }
    }
}
</script>

<style lang="less" scoped>
.cart-submit{
    position: fixed;
    bottom: 101px;
    height: 100px;
    width: 100%;
    // 覆盖样式
    /deep/ .van-submit-bar{
        bottom: 101px;
        padding-left: 20px;
        box-sizing: border-box;
        // 全选
        .van-checkbox__icon--checked .van-icon{
            background: #00AAEE;
            border-color: #00AAEE;
        }
        // 价格
        .van-submit-bar__price{
            color: #00AAEE;
        }
        // 提交按钮
        .van-button--danger{
            background: #00AAEE;
            border: 1px solid #00AAEE;
        }
    }
}
</style>

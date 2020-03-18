<template>
    <div class="header">
        <van-sticky>
            <div class="header-content">
                <van-icon class="header-backicon" name="arrow-left" @click="goBack" />
                <div class="header-title">{{title}}</div>
                <van-icon v-if="showDelete" @click="deleteSelected" class="header-deleteicon" name="delete" />
            </div>
        </van-sticky>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        title: {
            type: String
        },
        showDelete: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        ...mapGetters([
            'cartSelectCount'
        ]),
    },
    methods: {
        // 返回上一级
        goBack() {
            this.$router.go(-1)
        },
        // 删除选中的商品
        deleteSelected() {
            if(this.cartSelectCount == 0){
                this.$toast('还未选中任何商品')
                return
            }
            this.$dialog.confirm({
                message: '确定删除所选中的' + this.cartSelectCount + '件商品？'
            }).then(() => {
                this.$store.commit('DELETE_SELECT_COMMODITY')
            }).catch(() => {})
        }
    }
}
</script>

<style lang="less" scoped>
.header{
    .header-content{
        height: 100px;
        width: 100%;
        background: #F5F5F5;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9999;
        .header-backicon{
            position: absolute;
            left: 15px;
            top: 50%;
            margin-top: -28px;
            font-size: 50px;
            color: #999;
        }
        .header-deleteicon{
            position: absolute;
            right: 15px;
            top: 50%;
            margin-top: -28px;
            font-size: 50px;
            color: #999;
        }
        .header-title{
            width: 60%;
            height: 100px;
            line-height: 100px;
            text-align: center;
            margin: 0 auto;
            font-size: 32px;
            color: #666;
        }
    }
}
</style>
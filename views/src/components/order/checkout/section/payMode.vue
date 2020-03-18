<template>
    <div class="pay-mode">
        <div class="pay-title"><span>支付方式</span></div>
        <van-radio-group v-model="checkedName">
            <div class="pay-list" v-for="(item, index) in payList" :key="index" @click="choosePayMode(item.payName)">
                <div class="list-name"><van-icon :name="item.iconName" /><span>{{item.payName}}</span></div>
                <div class="list-check">
                    <van-radio :name="item.payName" :disabled="item.disabled" checked-color="#00AAEE"/>
                </div>
            </div>
        </van-radio-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            payList: [
                {iconName: 'gold-coin', payName: '余额支付', disabled: false},
                {iconName: 'alipay', payName: '支付宝支付', disabled: true},
                {iconName: 'wechat', payName: '微信支付', disabled: true},
            ],
            checkedName: '余额支付',
        }
    },
    methods: {
        choosePayMode(item) {
            if(item != '余额支付') {
                return
            }
            this.checkedName = item
        },
    }
}
</script>

<style lang="less" scoped>
.pay-mode{
    margin-top: 20px;
    padding: 0px 20px 25px 20px;
    width: 100%;
    background: #FFF;
    box-sizing: border-box;
    .pay-title{
        border-bottom: 1px solid #EFEFEF;
        line-height: 100px;
        font-size: 32px;
    }
    .pay-list{
        padding: 15px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .list-name{
            display: flex;
            align-items: center;
            .van-icon{
                margin-right: 10px;
                font-size: 45px;
            }
            .van-icon-gold-coin{
                color: #FBDA57;
            }
            .van-icon-alipay{
                color: #00A0E9;
            }
            .van-icon-wechat{
                color: #1BB632;
            }
            span{
                font-size: 30px;
                font-weight: 600;
            }
        }
    }
}
</style>
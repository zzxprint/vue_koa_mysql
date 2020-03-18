<template>
    <div class="mine-orders">
        <div class="orders-pad">
            <div class="orders-title">
                <span class="title-bold">我的订单</span>
                <span class="title-thin">全部订单<svg-icon icon-class="arrowRight"></svg-icon></span>
            </div>
            <div class="orders-icon">
                <van-grid :border="false">
                    <van-grid-item icon="paid" text="待支付" />
                    <van-grid-item icon="bag-o" text="待收货" />
                    <van-grid-item icon="comment-o" text="待评价" />
                    <van-grid-item icon="after-sale" text="售后/退款" />
                </van-grid>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.mine-orders{
    width: 100%;
    margin-top: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    .orders-pad{
        background: #FFF;
        box-shadow: 0 4px 4px #EFEFEF;
        border-radius: 10px;
        padding: 35px 20px;
        .orders-title{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 0;
            .title-bold{
                font-size: 34px;
                color: #333;
            }
            .title-thin{
                font-size: 20px;
                color: #999;
            }
        }
        .orders-icon{
            margin-top: 35px;
            /deep/.van-grid-item__content{
                padding: 0;
            }
        }
    }
}
</style>
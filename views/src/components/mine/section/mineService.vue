<template>
    <div class="mine-service">
        <div class="service-pad">
            <div class="service-title">
                <span class="title-bold">我的服务</span>
            </div>
            <div class="service-icon">
                <van-grid :column-num="3" :border="false">
                    <van-grid-item icon="location-o" text="收货地址" />
                    <van-grid-item icon="vip-card-o" text="我的会员" />
                    <van-grid-item icon="envelop-o" text="意见反馈" />
                    <van-grid-item icon="send-gift-o" text="积分商城" />
                    <van-grid-item icon="setting-o" text="设置" />
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
.mine-service{
    width: 100%;
    margin-top: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    .service-pad{
        background: #FFF;
        box-shadow: 0 4px 4px #EFEFEF;
        border-radius: 10px;
        padding: 35px 20px;
        .service-title{
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
        .service-icon{
            margin-top: 35px;
        }
    }
}
</style>

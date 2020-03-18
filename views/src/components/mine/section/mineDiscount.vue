<template>
    <div class="mine-discount">
        <div class="discount-pad">
            <div class="pad-content">
                优惠券<span>10张</span>
            </div>
            <div class="pad-content">
                积分<span>20分</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.mine-discount{
    width: 100%;
    margin-top: -80px;
    padding: 0 20px;
    box-sizing: border-box;
    .discount-pad{
        height: 160px;
        background: #FFF;
        box-shadow: 0 4px 4px #EFEFEF;
        border-radius: 10px;
        display: flex;
        align-items: center;
        .pad-content{
            width: 50%;
            height: 100px;
            font-size: 28px;
            border-right: 2px solid #EFEFEF;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                font-size: 32px;
                font-weight: bold;
                margin-left: 10px;
            }
            &:last-child{
                border-right: none;
            }
        }
    }
}
</style>

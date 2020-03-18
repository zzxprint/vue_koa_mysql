<template>
    <div class="coupon">
        <span class="coupon-title">优惠券</span>
        <div class="more-btn">
            <span>0张可用</span><van-icon name="arrow" />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.coupon{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    padding: 25px 20px;
    width: 100%;
    background: #FFF;
    box-sizing: border-box;
    .coupon-title{
        line-height: 50px;
        font-size: 32px;
    }
    .more-btn{
        flex-shrink: 0;
        display: flex;
        font-size: 30px;
        letter-spacing: 2px;
        color: #999;
    }
}
</style>
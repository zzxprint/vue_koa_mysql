<template>
    <div class="shop-carousel">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="../../../assets/carousel/carousel_1.jpg"/></van-swipe-item>
            <van-swipe-item><img src="../../../assets/carousel/carousel_2.jpg"/></van-swipe-item>
            <van-swipe-item><img src="../../../assets/carousel/carousel_3.jpg"/></van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style lang="less" scoped>
.shop-carousel{
    height: 420px;
    width: 100%;
    .van-swipe{
        height: 100%;
        .van-swipe-item{
            line-height: 420px;
            text-align: center;
            background: #00AAEE;
            color: #FFF;
            img{
                height: 100%;
                width: 100%;
            }
        }
    }
}
</style>

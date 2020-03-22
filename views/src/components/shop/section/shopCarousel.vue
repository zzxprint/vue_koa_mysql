<template>
    <div class="shop-carousel">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in imgArr" :key="index">
                <img :src="item.url"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgArr: [
                {url: require('../../../assets/carousel/carousel_1.png')},
                {url: require('../../../assets/carousel/carousel_2.jpg')},
                {url: require('../../../assets/carousel/carousel_3.jpg')}
            ]
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
            background: #FFF;
            color: #FFF;
            img{
                height: 100%;
                width: 100%;
            }
        }
    }
}
</style>

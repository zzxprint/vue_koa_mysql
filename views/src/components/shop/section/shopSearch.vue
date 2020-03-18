<template>
    <div class="shop-search">
        <van-icon name="search" />
        <span>输入商品名称</span>
    </div>
</template>

<script>

export default {
    
}
</script>

<style lang="less" scoped>
.shop-search{
    width: 600px;
    height: 65px;
    background: rgba(255, 255, 255, .8);
    position: absolute;
    left: 50%;
    margin-left: -300px;
    top: 30px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .van-icon{
        color: #999;
        font-size: 34px;
        margin-right: 20px;
    }
    span{
        color: #999;
        font-size: 30px;
    }
}
</style>

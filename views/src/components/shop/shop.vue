<template>
    <div class="shop">
        <!-- 轮播图 -->
        <shop-carousel></shop-carousel>
        <!-- 搜索框 -->
        <shop-search></shop-search>
        <!-- 图标列表 -->
        <shop-icon></shop-icon>
        <!-- 打折专区 -->
        <shop-discount></shop-discount>
        <!-- 部分商品预览 -->
        <shop-list></shop-list>
    </div>
</template>

<script>
import shopCarousel from './section/shopCarousel'
import shopSearch from './section/shopSearch'
import shopIcon from './section/shopIcon'
import shopDiscount from './section/shopDiscount'
import shopList from './section/shopList'
export default {
    components: {
        'shop-carousel': shopCarousel,
        'shop-search': shopSearch,
        'shop-icon': shopIcon,
        'shop-discount': shopDiscount,
        'shop-list': shopList
    }
}
</script>

<style lang="less" scoped>

</style>

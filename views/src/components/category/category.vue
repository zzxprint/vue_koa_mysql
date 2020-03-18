<template>
    <div class="category">
        <!-- 头部 -->
        <Header title="分类"></Header>
        <div class="content">
            <!-- 侧边栏 -->
            <category-side></category-side>
            <!-- 商品列表 -->
            <category-list></category-list>
        </div>
    </div>
</template>

<script>
import categorySide from './section/categorySide'
import categoryList from './section/categoryList'
export default {
    components: {
        'category-side': categorySide,
        'category-list': categoryList
    }
}
</script>

<style lang="less" scoped>
</style>

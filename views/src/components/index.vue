<template>
    <div class="index">
        <div class="main-content">
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.index{
    .main-content{
        height: auto;
        width: 100%;
        margin-bottom: 100px;
    }
}
</style>

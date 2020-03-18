<template>
    <div class="shop-icon">
        <van-row type="flex" justify="space-around">
            <van-col span="5">
                <div class="icon-background" @click="toCategory('1')">
                    <svg-icon icon-class="noodles"></svg-icon>
                </div>
                <span>方便面</span>
            </van-col>
            <van-col span="5">
                <div class="icon-background" @click="toCategory('2')">
                    <svg-icon icon-class="chips"></svg-icon>
                </div>
                <span>薯片</span>
            </van-col>
            <van-col span="5">
                <div class="icon-background" @click="toCategory('3')">
                    <svg-icon icon-class="drinks"></svg-icon>
                </div>
                <span>饮料</span>
            </van-col>
            <van-col span="5">
                <div class="icon-background">
                    <svg-icon icon-class="chocolate"></svg-icon>
                </div>
                <span>巧克力</span>
            </van-col>
        </van-row>
        <van-row type="flex" justify="space-around">
            <van-col span="5">
                <div class="icon-background">
                    <svg-icon icon-class="milk"></svg-icon>
                </div>
                <span>奶品</span>
            </van-col>
            <van-col span="5">
                <div class="icon-background">
                    <svg-icon icon-class="bread"></svg-icon>
                </div>
                <span>面包</span>
            </van-col>
            <van-col span="5">
                <div class="icon-background">
                    <svg-icon icon-class="biscuit"></svg-icon>
                </div>
                <span>饼干</span>
            </van-col>
            <van-col span="5">
                <div class="icon-background" @click="toCategory('')">
                    <svg-icon icon-class="more"></svg-icon>
                </div>
                <span>更多</span>
            </van-col>
        </van-row>
    </div>
</template>

<script>
export default {
    methods:{
        toCategory(categoryId){
            this.$store.commit('CHANGE_CATEGORY_ID', categoryId)
            this.$router.push('/category')
        }
    }
}
</script>

<style lang="less" scoped>
.shop-icon{
    padding: 10px 0 30px 0;
    background: #FFF;
    .van-row{
        padding-top: 30px;
        .van-col{
            text-align: center;
            .icon-background{
                height: 100px;
                width: 100px;
                border-radius: 50px;
                background: rgb(158, 214, 236);
                margin: auto;
                display: flex;
                align-items: center;
                justify-content: center;
                .svg-icon{
                    height: 70px;
                    width: 70px;
                }
            }
            span{
                display: block;
                font-size: 26px;
                text-align: center;
                margin-top: 15px;
                color: #777;
            }
        }
    }
}
</style>

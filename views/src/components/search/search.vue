<template>
    <div class="search">
        <!-- 搜索框 -->
        <search-base-input v-model="searchText" @search="searchCommodity"></search-base-input>
    </div>
</template>

<script>
import searchBaseInput from './section/searchBaseInput'
export default {
    components: {
        'search-base-input': searchBaseInput
    },
    data() {
        return {
            searchText: '' // 搜索的文字
        }
    },
    created() {
        document.body.style.backgroundColor = "#FFF"
    },
    methods: {
        // 搜索商品
        searchCommodity() {
            this.$axios.post('/commodity/searchCommodity', {
                name: this.searchText
            }).then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
        }
    },
    beforeRouteLeave(to, from, next) {
        document.body.style.backgroundColor = "#F5F5F5"
        next()
    }
}
</script>

<style lang="less" scoped>
.search-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20px;
    .search-input{
        display: flex;
        align-items: center;
        width: 100%;
        height: 65px;
        background: #F5F5F5;
        border-radius: 32.5px;
        form{
            display: flex;
            height: 50px;
            width: 100%;
            input{
                padding: 0;
                height: 50px;
                width: 100%;
                font-size: 28px;
                background: #F5F5F5;
                border: none;
            }
        }
        .van-icon{
            margin: 0 20px;
            font-size: 40px;
            color: #999;
        }
    }
    .search-cancel{
        flex-shrink: 0;
        margin-left: 20px;
        width: 70px;
        font-size: 28px;
        color: #333;
    }
}
</style>
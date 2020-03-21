<template>
    <div class="search-base-input">
        <div class="search-content">
            <div class="search-input">
                <van-icon name="search" />
                <form action="javascript: function f(){ return true }" :style="{'margin-right': newVal == '' ? '32.5px' : '0'}">
                    <input ref="searchInput" type="search" @keyup.enter="search" v-model="newVal">
                </form>
                <van-icon name="clear" @click="clear" v-show="newVal != ''" />
            </div>
            <div class="search-cancel" @click="cancel"><span>取消</span></div>
        </div>
    </div>
</template>

<script>
export default {
    model: {
        prop: ['value']
    },
    props: {
        value: {
            type: String
        }
    },
    computed: {
        newVal: { // 搜索的文字
            get: function () {
                return this.value
            },
            set: function (value) {
                this.$emit('input', value)
            }
        }
    },
    mounted() {
        this.$refs.searchInput.focus()
    },
    methods: {
        // 清空文字
        clear() {
            this.newVal = ''
        },
        // 开始搜索
        search() {
            this.$refs.searchInput.blur()
            this.$emit('search')
        },
        // 取消搜索
        cancel() {
            this.$router.go(-1)
        }
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
                &::-webkit-search-cancel-button{
                    display: none;
                }
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
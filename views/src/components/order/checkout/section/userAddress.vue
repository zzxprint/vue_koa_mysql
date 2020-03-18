<template>
    <div class="user-address">
        <div class="address-pad">
            <div class="address">华东园2幢2单元1001</div>
            <div class="info"><span>张忠旭</span><span class="gender">/先生</span><span class="phone">15757480057</span></div>
        </div>
        <van-icon class="arrow-icon" name="arrow"/>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.user-address{
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 40px 20px;
    background: #FFF;
    &::before{
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 0.053333rem;
        background: -webkit-repeating-linear-gradient(135deg,#ff6c6c 0,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);
        background: -o-repeating-linear-gradient(135deg,#ff6c6c 0,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);
        background: repeating-linear-gradient(-45deg,#ff6c6c 0,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);
        -webkit-background-size: 2.133333rem 2.133333rem;
        background-size: 2.133333rem;
        content: '';
    }
    .address-pad{
        flex: 1;
        .address{
            margin-bottom: 10px;
            font-size: 34px;
            font-weight: bold;
            color: #333;
        }
        .info{
            line-height: 35px;
            font-size: 28px;
            .gender{
                margin-left: 15px;
                font-size: 24px;
            }
            .phone{
                margin-left: 20px;
            }
        }
    }
    .arrow-icon{
        flex: 0;
        font-size: 50px;
        color: #999;
    }
}
</style>
<template>
    <div class="mine-baseInfo">
        <div class="base-content">
            <div class="mine-photo"><svg-icon iconClass="userIcon"></svg-icon></div>
            <div class="mine-info">
                <div class="mine-name">{{userInfo.username}}</div>
                <div class="mine-phone">{{userInfo.phoneNumber}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'userInfo'
        ]),
    },
}
</script>

<style lang="less" scoped>
.mine-baseInfo{
    height: 320px;
    width: 100%;
    background: #00AAEE;
    box-shadow: 0 5px 5px #DEDEDE;
    .base-content{
        height: 240px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        .mine-photo{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 120px;
            width: 120px;
            border-radius: 60px;
            background: #FFF;
            flex-shrink: 0;
            overflow: hidden;
            .svg-icon{
                height: 100px;
                width: 100px;
            }
        }
        .mine-info{
            height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-left: 20px;
            .mine-name{
                font-size: 36px;
                color: #FFF;
            }
            .mine-phone{
                font-size: 30px;
                color: #FFF;
            }
        }
    }
}
</style>

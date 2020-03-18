<template>
    <div class="login">
        <!-- 返回按钮 -->
        <div class="back-btn">
            <van-icon name="cross" @click="goBack" />
            <span>注册</span>
        </div>
        <!-- 登录部分 -->
        <div class="login-content">
            <div class="login-title"><span>用户登录</span></div>
            <div class="login-form">
                <div class="form-line">
                    <input type="text" v-model="form.username" placeholder="账号">
                </div>
                <div class="form-line">
                    <input type="password" v-model="form.password" placeholder="密码">
                </div>
            </div>
            <div class="login-btn-content">
                <button class="login-btn" :class="{'active': canSubmit}" @click="login">登录</button>
            </div>
            <div class="forgot-pwd">
                <span>忘记密码</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        document.body.style.backgroundColor = "#FFF"
    },
    data() {
        return {
            form: {
                username: '', //用户名
                password: '' //密码
            },
            canSubmit: false, //是否能提交
        }
    },
    watch: {
        form: {
            handler(val) {
                if(val.username != '' && val.password != ''){
                    this.canSubmit = true
                }else{
                    this.canSubmit = false
                }
            },
            deep: true
        }
    },
    methods: {
        // 返回上一级
        goBack() {
            this.$router.go(-1)
        },
        // 登录
        login() {
            if(!this.canSubmit){
                return
            }
            this.$axios.post('/login/login',this.form).then(res => {
                if(res.data.success){
                    sessionStorage.setItem('token', res.data.token)
                    // 如果有下一步的路径
                    if(this.$route.params.nextPath){
                        this.$store.commit('SET_USERINFO', res.data.userInfo)
                        this.$router.replace(this.$route.params.nextPath)
                    }else{
                        this.$router.replace('/')
                    }
                }else{
                    this.$toast(res.data.msg)
                }
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
.login{
    min-height: 100%;
    height: auto;
    // 返回按钮
    .back-btn{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 30px;
        font-size: 50px;
        color: #00AAEE;
        span{
            font-size: 32px;
        }
    }
    // 登录部分
    .login-content{
        padding: 0 50px;
        box-sizing: border-box;
        .login-title{
            padding: 80px 0;
            font-size: 50px;
        }
        .login-form{
            width: 100%;
            .form-line{
                border-bottom: 2px solid #EFEFEF;
                &:last-child{
                    margin-top: 30px;
                }
                input{
                    padding: 32px 0;
                    width: 100%;
                    border: none;
                    font-size: 32px;
                }
            }
        }
        .login-btn-content{
            padding-top: 50px;
            .login-btn{
                padding: 0;
                height: 88px;
                width: 100%;
                border: none;
                border-radius: 15px;
                text-align: center;
                font-size: 36px;
                line-height: 88px;
                letter-spacing: 10px;
                color: #FFF;
                background: #6EC4E6;
            }
            .active{
                background: #00AAEE;
            }
        }
        .forgot-pwd{
            padding: 30px 0;
            font-size: 32px;
            text-align: right;
            color: #999;
        }
    }
}
</style>
import axios from 'axios'
import router from './index'
import { Toast } from 'vant'

// axios配置
axios.defaults.timeout = 8000
axios.defaults.baseURL = '/api'

// request拦截器
axios.interceptors.request.use(
    config => {
        if(sessionStorage.getItem('token')) {
            config.headers.Authorization = `Bearer ${sessionStorage.getItem('token')}`
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// response拦截器
axios.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        if(error.response) {
            switch (error.response.status) {
                case 401:
                    // 清除token，并跳转到登陆页面
                    sessionStorage.removeItem('token')
                    Toast('会话已过期，请重新登录')
                    router.replace({
                        name: 'login',
                        params: {nextPath: router.currentRoute.fullPath}
                    })
            }
        }
        return Promise.reject(error)
    }
)

export default axios
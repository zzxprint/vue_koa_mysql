import axios from 'axios'
import router from './index'

// axios配置
axios.defaults.timeout = 8000
axios.defaults.baseURL = 'http://192.168.200.13:3000/api'

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
        return response
    },
    error => {
        if(error.response) {
            switch (error.response.status) {
                case 401:
                    // 清除token，并跳转到登陆页面
                    sessionStorage.removeItem('token')
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
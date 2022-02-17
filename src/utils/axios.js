import axios from 'axios'
import { Toast } from 'vant'
import router from '../router'

axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '/api' : '//47.99.134.126:7008/api' // 根据环境变量切换本地和线上的请求地址
axios.defaults.withCredentials = true // 允许跨域
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Authorization'] = `${localStorage.getItem('token') || null}` // 本项目采用 token 的用户鉴权方式，在请求头的 headers 内添加 token，每次请求都会验证用户信息
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
    if (typeof res.data !== 'object') { // vue-router 4.x 的实例
        Toast.fail('服务端异常！')
        return Promise.reject(res)
    }
    // code 非 200 的情况下为异常情况
    // 当返回的 code 码为非 200 时，进入判断语句内
    if (res.data.code != 200) {
        // 将错误提示全局展示
        if (res.data.msg) Toast.fail(res.data.msg)
            // 返回 401 代表接口需要登录，继而跳转到登录页面
        if (res.data.code == 401) {
            router.push({ path: '/login' })
        }
        return Promise.reject(res.data)
    }
    // 其他情况直接返回 data 数据
    // code 码为 200 的时候，返回整个结构体
    return res.data
})

export default axios
/**
 * 全站http配置
 *
 * axios参数说明
 * isToken是否需要token
 */
import axios from 'axios'
import { Message } from 'element-ui'
import { addPending, removePending } from './pending'

// 创建 axios 实例
// 使用代理时baseUrl只需要proxy，不需要前置http,http需要在vue.config.js设置
const service = axios.create({
  baseURL: 'http://park-api.kkx88.cn/',// process.env.VUE_APP_API_BASE_URL, // api base_url
  timeout: 10000, // 请求超时时间
  withCredentials: false, // 跨域请求，允许保存cookie

})

// 请求拦截
service.interceptors.request.use(
  config => {
    removePending(config) // 在请求开始前，对之前的请求做检查取消操作
    addPending(config) // 将当前请求添加到 pending 中

    // header authorization
    if (localStorage.getItem('tianditu-token')) {
      config.headers['Authorization'] = localStorage.getItem('tianditu-token')
    }
    return config
  },

  function(error) {
    return Promise.reject(error)
  },
)

// 响应拦截
service.interceptors.response.use(
  response => {
    // 重复请求栈
    removePending(response) // 在请求结束后，移除本次请求

    const { code, error = '未知错误' } = response.data
    const isBlob = response.data instanceof Blob
    if (code === 200 || isBlob) {
      return response.data
    } else {
      Message({
        type: 'error',
        message: error,
      })
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ ...response })
    }
  },
  error => {
    // 取消请求的接口
    if (error.__CANCEL__) {
      return Promise.reject(error)
    }
    const message = error.message
    const status = Number(error.response && error.response.status)
    // 如果是401则跳转到登录页面
    if (status === 401) {
      // 登录
      // router.push({ path: '/login' })
      Message({
        type: 'error',
        message: '登录状态已过期，请重新登录',
      })
      return Promise.reject(error)
    }
    if (status === 403) {
      Message({
        type: 'error',
        message: '权限不足',
      })
      return Promise.reject(error)
    }
    if (error.code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
      Message({
        type: 'error',
        message: '网络环境太差，请求超时',
      })
    } else if (message === 'Network Error') {
      if (error.response) {
        Message({
          type: 'error',
          message: `${error.response.status}:network连接失败，请求中断`,
        })
      } else {
        Message({
          type: 'error',
          message: '未连接到服务器，可能网络中断或接口跨域',
        })
      }
    } else if (message) {
      Message({
        type: 'error',
        message: message,
      })
    }
    return Promise.reject(error)
  },
)

export default service

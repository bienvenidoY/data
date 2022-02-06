// 统一axios的method 接收参数的差异
import request from './api-config'

export const reqPost = (url, data, config = {}) => {
  const method = 'post'
  return request({
    url,
    method,
    data,
    ...config,
  })
}

export const reqDelete = (url, data, config = {}) => {
  const method = 'delete'
  return request({
    url: url,
    method,
    data,
    ...config,
  })
}

export const reqPut = (url, data, config = {}) => {
  const method = 'put'
  return request({
    url,
    method,
    data,
    ...config,
  })
}

export const reqGet = (url, params, config = {}) => {
  const method = 'get'
  return request({
    url,
    method,
    params,
    ...config,
  })
}

export const GET = {
  requestMethod: 'get', // 使用
  requestMethodFn: reqGet,
}
export const POST = {
  requestMethod: 'post', // 使用
  requestMethodFn: reqPost,
}

export const PUT = {
  requestMethod: 'put', // 使用
  requestMethodFn: reqPost,
}

export const DELETE = {
  requestMethod: 'delete', // 使用
  requestMethodFn: reqPost,
}

// 提供映射
const serviceList = {
  GET: reqGet,
  POST: reqPost,
  PUT: reqPut,
  DELETE: reqDelete,
}
export const service = ({ method, url, config, data }) => {
  return serviceList[method](url, data, config)
}
export default {
  install(Vue) {
    Object.defineProperties(Vue.prototype, {
      $reqGet: {
        value: reqGet,
      },
      $reqPost: {
        value: reqPost,
      },
      $reqPut: {
        value: reqPut,
      },
      $reqDel: {
        value: reqDelete,
      },
    })
  },
}

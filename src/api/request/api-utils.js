/**
 * 取接口前缀
 * '/admin/xx/yy' => 'admin'
 * 'review/aa/bb' => 'review'
 */
export const getApiPrefix = api => {
  let apiText = api
  if (apiText.charAt(0) === '/') {
    apiText = apiText.substring(1, apiText.length)
  }
  return apiText.split('/')[0]
}

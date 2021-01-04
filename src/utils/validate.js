/* 注册功能可以改写此处，验证用户名是否已经注册 */
export function isValidateUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/* 小写字母 */
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母 */
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母 */
export function validateAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

// 判断对象是否为空
export function isEmptyObj(obj) {
  for (var key in obj) {
    return false
  }
  return true
}

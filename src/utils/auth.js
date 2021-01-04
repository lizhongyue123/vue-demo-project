import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token, expiresTime) {
  // if (expiresTime) {
  //   const currentTime = new Date()
  //   expiresTime = new Date(currentTime.getTime() + 50 * 60 * 1000)
  // }
  return Cookies.set(TokenKey, token, { expires: expiresTime })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}


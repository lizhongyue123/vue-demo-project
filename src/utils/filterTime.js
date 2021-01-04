import moment from 'moment'
moment.locale('zh-cn')

/**
 * @return {string}
 */
export function FormatDate(date, fmt) {
  if (typeof fmt === 'undefined') {
    // fmt = 'yyyy-MM-dd hh:mm:ss'
    fmt = 'YYYY-MM-DD'
  }
  return moment(date).format(fmt)
}

/**
 * @return {string}
 */
export function FormatDateTime(date, fmt) {
  if (typeof fmt === 'undefined') {
    fmt = 'YYYY-MM-DD HH:mm:ss'
  }
  return moment(date).format(fmt)
}

function formatTimestamp (timestamp, length) {
  var d = new Date()
  d.setTime(timestamp * 1000)

  var year = d.getFullYear()
  var month = d.getMonth() + 1
  var day = d.getDate()
  var hour = d.getHours()
  var minute = d.getMinutes()
  var second = d.getSeconds()

  var fullDate = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day + ' ' + (hour < 10 ? '0' : '') + hour + ':' + (minute < 10 ? '0' : '') + minute + ':' + (second < 10 ? '0' : '') + second

  // 10, 13, 16, 19
  length || (length = 10)

  return fullDate.substr(0, length)
}

export default {
  formatTimestamp
}

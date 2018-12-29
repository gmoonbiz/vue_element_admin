import { Message, MessageBox } from 'element-ui'

function success (title) {
  Message({
    message: title,
    type: 'success',
    duration: 5 * 1000
  })
}

function confirm (title, cb) {
  MessageBox.confirm(title, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    closeOnClickModal: false,
    type: 'warning'
  }).then(() => {
    cb && cb()
  }).catch(() => {
    console.log('已取消confirm')
  })
}

export default {
  success,
  confirm
}

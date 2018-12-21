import request from '@/utils/request'

export const getUserList = params => {
  return request.post('/user/getuserlist', params)
}

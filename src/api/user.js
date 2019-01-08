import request from '@/utils/request'

export const getUserList = params => {
  return request.post('/user/getuserlist', params)
}
export const addUser = params => {
  return request.post('/user/addUser', params)
}
export const delUser = params => {
  return request.post('/user/delUser', params)
}

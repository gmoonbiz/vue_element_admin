import request from '@/utils/request'

export const getClientList = params => {
  return request.post('/client/getclientlist', params)
}
export const addClient = params => {
  return request.post('/client/addClient', params)
}
export const delClient = params => {
  return request.post('/client/delClient', params)
}
export const getClientDetail = params => {
  return request.post('/client/getClientDetail', params)
}
export const addClientFollow = params => {
  return request.post('/client/addClientFollow', params)
}
export const getFollowList = params => {
  return request.post('/client/getFollowList', params)
}
export const delFollow = params => {
  return request.post('/client/delFollow', params)
}
export const addClientVisit = params => {
  return request.post('/client/addClientVisit', params)
}
export const getVisitList = params => {
  return request.post('/client/getVisitList', params)
}
export const delVisit = params => {
  return request.post('/client/delVisit', params)
}

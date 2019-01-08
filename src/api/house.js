import request from '@/utils/request'

export const getHouseList = params => {
  return request.post('/house/gethouselist', params)
}
export const queryHouseList = params => {
  return request.post('/house/queryHouseList', params)
}

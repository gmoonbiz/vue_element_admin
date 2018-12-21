import request from '@/utils/request'

export const getHouseList = params => {
  return request.post('/house/gethouselist', params)
}

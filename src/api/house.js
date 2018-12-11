import request from '@/utils/request'

export const getHouseList = params => {
  return request.post('/test/t1', params)
}

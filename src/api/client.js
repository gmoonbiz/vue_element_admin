import request from '@/utils/request'

export const getClientList = params => {
  return request.post('/client/getclientlist', params)
}

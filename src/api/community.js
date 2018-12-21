import request from '@/utils/request'

export const getCommunityList = params => {
  return request.post('/community/getCommunityList', params)
}

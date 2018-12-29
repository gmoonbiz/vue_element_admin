import request from '@/utils/request'

export const getCommunityList = params => {
  return request.post('/community/getCommunityList', params)
}

export const addCommunity = params => {
  return request.post('/community/addCommunity', params)
}

export const delCommunity = params => {
  return request.post('/community/delCommunity', params)
}

export const getCommunityDetail = params => {
  return request.post('/community/getCommunityDetail', params)
}

export const getCommunityImage = params => {
  return request.post('/community/getCommunityImage', params)
}

export const delCommunityImage = params => {
  return request.post('/community/delCommunityImage', params)
}

import request from '@/utils/request'

export const getDistrictList = params => {
  return request.post('/camel/getDistrictList', params)
}

export const getRegionList = params => {
  return request.post('/camel/getRegionList', params)
}

export const getAreaList = params => {
  return request.post('/camel/getAreaList', params)
}

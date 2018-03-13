// import { commonParams ,opts} from '@/api/common_query.js'
import request from '@/utils/request'

//get
export function getList(query) {
  return request({
    url: '/getServiceData/main',
    method: 'get',
    params: query
  })
}

//post
export function postList(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}
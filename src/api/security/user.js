import { http } from '../index'

const SECURITY = '/security'

export function getUserListByForm (params) {
  return http.post(SECURITY + '/getUserListByForm', params).then(res => {
    console.log(res)
  })
}

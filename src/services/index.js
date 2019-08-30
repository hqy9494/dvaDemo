import request from '../utils/request';

export function postLogin(payload) {
    // console.log(payload,2)
    return request({
        url: '/users/login',
        method:'post',
        data: payload.data
    })
}
export function postSignup(payload) {
    // console.log(payload,2)
    return request({
      url: '/users/signup',
      method:'post',
      data: payload.data
  })
}

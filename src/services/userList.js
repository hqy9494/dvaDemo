import request from '../utils/request';

export function getAllUser(payload) {
    // console.log(payload,0)

    return request({
        url: '/form/sel',
        method:'get'
    })
}
export function addTable(payload) {
    // console.log(payload,2)
    return request({
        url: '/form/add',
        method:'get',
        params: payload.params
    })
}

export function findTable(payload) {
    console.log(payload,2)
    return request({
        url: '/form/find',
        method:'post',
        data: payload.data
    })
}
export function editTable(payload) {
    // console.log(payload,2)
    return request({
        url: '/form/edit',
        method:'post',
        data: payload.data
    })
}
export function delTable(payload) {
    // console.log(payload,2)
    return request({
        url: '/form/del',
        method:'get',
        params: payload.params
    })
}
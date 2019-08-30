import { Message } from 'antd';
// import fetch from 'dva/fetch';
import axios from 'axios'
import baseUrl from '../common/baseUrl';
// function parseJSON(response) {
//   return response.json();
// }

// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }

//   const error = new Error(response.statusText);
//   error.response = response;
//   throw error;
// }

const fetch = (payload) => {
  let obj = {
    url: `${baseUrl.base}${payload.url}`,
    method: payload.method,
    headers:{
      Authorization: localStorage.getItem('token') || ""
    },
  }
  if(payload.data) obj.data = payload.data;
  if(payload.params) {
    let params = payload.params;
    let paramsList = Object.keys(params).map(e=>`${e}=${payload.params[e]}`)
    obj.url = `${obj.url}?${paramsList.join('&')}`
  }
  // console.log(obj,666)
  return axios(obj)
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(payload) {
  return fetch(payload)
    // .then(checkStatus)
    // .then(parseJSON)
    // .then(data => ({ data }))
    .catch(err => Message.error(err.message));
}

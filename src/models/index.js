import {postLogin,postSignup} from '../services/index'
export default {
    namespace: 'Index',
    state: {user:{}},
  
    subscriptions: {
      setup({ dispatch, history }) {
        // if(!localStorage.token){
        //   history.push('/')
        // }
        // else{
        //   history.go(-1)
        // }
      },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {
        yield put({ type: 'save' });
      },
      *postLogin({payload}, {call, put, select}) {
        if(JSON.stringify(payload) === '{}'){
          alert('查询条件不能全部为空！');
          return
        }
        const res = yield call(postLogin,{data:payload})
        // console.log(payload,1)
        if (!res) return
        yield put({
          type: 'change',
          payload: {
            name: 'user',
            value: res.data
          }
        })
        return res
      },
      *postSignup({payload}, {call, put, select}) {
        if(JSON.stringify(payload) === '{}'){
          alert('条件不能全部为空！');
          return
        }
        const res = yield call(postSignup,{data:payload})
        // console.log(payload,1)
        if (!res) return
        yield put({
          type: 'change',
          payload: {
            name: 'user',
            value: res.data
          }
        })
        return res
      },
    },
  
    reducers: {
      reducers: {
        change(state, action) {
          const {payload} = action
    
          if (!payload || !payload.name) return
    
          return {
            ...state,
            [payload.name]: payload.value
          }
        }
      },
    },
  };
  
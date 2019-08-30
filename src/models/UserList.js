import {getAllUser,addTable,delTable,editTable,selTable,findTable,reflashTable} from '../services/userList'
export default {

    namespace: 'UserList',
  
    state: {
      users:[]
    },
  
    subscriptions: {
      setup({ dispatch, history }) {
      },
    },
  
    effects: {
      // *fetch({ payload }, { call, put }) {
      //   yield put({ type: 'save' });
      // },
      *getAllUser({payload}, {call, put, select}) {
        const res = yield call(getAllUser)
        // console.log(data,'settings')
        if (!res) return
        yield put({
          type: 'change',
          payload: {
            name: 'users',
            value: res.data
          }
        })
        return res
      },
      *addTable({payload}, {call, put, select}) {
        const res = yield call(addTable,{params:payload})
        // console.log(payload,1)
        if (!res) return
        yield put({
          type: 'change',
          payload: {
            name: 'users',
            value: res.data
          }
        })
        return res
      },

      *findTable({payload}, {call, put, select}) {
        if(JSON.stringify(payload) === '{}'){
          alert('查询条件不能全部为空！');
          return
        }
        const res = yield call(findTable,{data:payload})
        // console.log(payload,1)
        if (!res) return
        yield put({
          type: 'change',
          payload: {
            name: 'users',
            value: res.data
          }
        })
        return res
      },
      
      *editTable({payload}, {call, put, select}) {
        if(JSON.stringify(payload) === '{}'){
          alert('查询条件不能全部为空！');
          return
        }
        const res = yield call(editTable,{data:payload})
        // console.log(payload,1)
        if (!res) return
        yield put({
          type: 'change',
          payload: {
            name: 'users',
            value: res.data
          }
        })
        return res
      },

      *delTable({payload}, {call, put, select}) {
        const res = yield call(delTable,{params:{id:payload.id}})
        // console.log(payload,1)
        if (!res) return
        yield put({
          type: 'change',
          payload: {
            name: 'users',
            value: res.data
          }
        })
        return res
      },
    },
  
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
  
  };
  
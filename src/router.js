import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import menu from './common/menu';
// import error from './routes/error';
import Login from './routes/login/index';
import UserList from './routes/form/UserList';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" exact component={IndexPage} /> */}
        <Route path="/" history={history} exact component={props => {
          return localStorage.token?(<Redirect to={{
            pathname: '/userList',
            state: { from: props.location },
          }} />):(<Login history={history}/>)
        }} />
        {/* <Route path="/userList" exact component={props=>{
          console.log(props)
          return localStorage.token?(<UserList/>):(<Redirect to={{
            pathname: '/',
            state: { from: props.location },
          }} />)
        }} /> */}
        {
          menu.length>0 && menu.map((e,i) => {
            return <Route path={e.path} key={i} exact component={props=>{
              console.log(props)
              return localStorage.token?(<e.component history={history}/>):(<Redirect to={{
                pathname: '/',
                state: { from: props.location },
              }} />)
            }} />
          })
        }
        {/* <Route path='/error'/> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;

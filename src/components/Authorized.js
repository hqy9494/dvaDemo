import React, { Component } from 'react'
import { connect } from 'dva';
import { Router, Route, Redirect, withRouter } from 'dva/router';
import { message } from 'antd';

class AuthRouter extends Component {
    render() {
        const { component: Component, ...rest } = this.props
        const isLogged = localStorage.token
        if (!isLogged) {
          message.warning('您需要先登陆');
        }
        return (
            <Route {...rest} render={props => {
              return isLogged
                  ? <Component {...props} />
                  : <Redirect to="/" />
            }} />
        )
      }
}

function mapStateToProps(state) {
 return {
   state
 }
}

// export default ListData;
export default connect(mapStateToProps)(withRouter(AuthRouter));
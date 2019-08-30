// export default () => {
//     return (
//       <div>
//         Users Page
//       </div>
//     )
//   }


import React from 'react';
import { connect } from 'dva';
// import styles from '../';
import antd from 'antd';
const { Card, Form, Col, Row, Input, Icon, Button} = antd
const {Component} = React;
const FormItem  = Form.Item
const formInput = {
  labelCol: {span:4},
  wrapperCol: {span:20},
}
class error extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
 
  render(){
    const { getFieldDecorator } = this.props.form;
    // console.log(this.props)
    return (
      <div>
        <p>404 not found</p> 
        <div onclick={()=>history.go(-1)}>返回</div>
      </div>
    );
  }
  
}
// const UserPage = Form.create()(User);
// const mapStateToProps = (state, ownProps) => {
//   return {
//     users: state.Index.user || null
//   }
// }
// UserPage.propTypes = {};

export default connect()(error);


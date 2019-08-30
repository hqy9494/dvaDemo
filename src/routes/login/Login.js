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
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  postLogin = () => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if(err){
        return 
      }
      // let payload = {};
      // Object.keys(values).map(e=>{
      //   if(values[e]) payload[e] = values[e]
      // })
      // if(id) payload.id = id; 
      // let data = {type:`UserList/${fun}`,payload}
      // this.props.dispatch(data)
      this.props.dispatch({
        type: 'UserPage/postLogin',
        payload: {...values}
      })
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    // console.log(this.props)
    return (
      <div>
        {/* <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dva">Getting Started</a></li>
        </ul> */}
        <Row gutter={24}>
          <Col sm={8} offset={8}>
            <Card>
              <Form>
                <FormItem {...formInput} label={"用户"}>
                {getFieldDecorator('user', {
                  label:'eeeeee',
                  rules: [{ required: true, message: 'Please input your user!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="User"
                  />,
                )}
                </FormItem>
                <FormItem {...formInput} label={"密码"}>
                {getFieldDecorator('pass', {
                  label:'eeeeee',
                  rules: [{ required: true, message: 'Please input your pass!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Pass"
                  />,
                )}
                </FormItem>
                &nbsp;
                <Form.Item style={{textAlign:'center'}}>
                  <Button  type="primary" onClick={()=>this.postLogin()}>登录</Button>
                  {/* <Button id="add" type="primary" onClick={()=>this.handleSubmit('addTable')}>添加</Button>&nbsp;
                  <Button id="find" type="defalut" onClick={()=>this.handleSubmit('findTable')}>查询</Button>&nbsp;
                  <Button id="reflash" type="danger" onClick={()=>this.props.dispatch({type:'UserList/getAllUser'})}>重置</Button>&nbsp; */}
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>


      </div>
    );
  }
  
}
const UserPage = Form.create()(User);
const mapStateToProps = (state, ownProps) => {
  return {
    users: state.Index.user || null
  }
}
UserPage.propTypes = {};

export default connect(mapStateToProps)(UserPage);


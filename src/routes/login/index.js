


import React from 'react';
import { connect } from 'dva';
// import styles from '../';
import antd from 'antd';
const { Card, Form, Col, Row, Input, Icon, Button, Message} = antd
const {Component} = React;
const FormItem  = Form.Item
const formInput = {
  labelCol: {span:4},
  wrapperCol: {span:20},
}
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Login'
    };
  }
  
  handleSubmit = (fn) => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if(err){
        return 
      }
      this.props.dispatch({
        type: `Index/post${fn}`,
        payload: {...values}
      }).then(v=>{
        if(v.data.success){
          localStorage.setItem('token',v.data.token)
          fn === 'Signup' && Message.success(`注册成功！`)
          this.props.history.push('/UserList')
        }else{
          alert(v.data.message)
        }
      })
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    const { status } = this.state
    // const status = this.props.match
    console.log(this.props)
    return (
      <div>
        {/* <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dva">Getting Started</a></li>
        </ul> */}
        <Row gutter={24}>
          <Col sm={12} offset={6}>
            <Card>
              <Form>
                <FormItem {...formInput} label={"用户"}>
                {getFieldDecorator('user', {
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
                  rules: [{ required: true, message: 'Please input your pass!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Pass"
                  />,
                )}
                </FormItem>
                {status === 'Signup' && <FormItem {...formInput} label={"手机"}>
                {getFieldDecorator('tel', {
                  rules: [{ required: true, message: 'Please input your pass!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Tel"
                  />,
                )}
                </FormItem>}
                &nbsp;
                <Form.Item style={{textAlign:'center'}}>
                  <Button  type="primary" onClick={()=>this.handleSubmit(status)}>{status === 'Login'?'登录':'注册'}</Button>
                  <Button  type="defalut" onClick={()=>this.setState({status:status === 'Login'?'Signup':'Login'})}>{status === 'Login'?'切换注册':'切换登录'}</Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>


      </div>
    );
  }
  
}
const Index = Form.create()(Login);
const mapStateToProps = (state, ownProps) => {
  return {
    users: state.Index.user || null
  }
}
Index.propTypes = {};

export default connect(mapStateToProps)(Index);


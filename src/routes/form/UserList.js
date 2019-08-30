import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Table } from 'antd';
import { routerRedux } from 'dva/router'
const {Component} = React;

const formInput = {
  labelCol: {span:8},
  wrapperCol: {span:16},
}
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    if(!localStorage.token){    
      this.props.dispatch(routerRedux.push('/'))
    }
  }
  componentDidMount() {
    this.props.dispatch({type:'UserList/getAllUser'})
  }
  
  handleModal = (name, value) => {
    this.props.dispatch({
      type: 'UserList/getAllUser',
      payload: {
        name,
        value
      }
    })
  }
  
  handleSubmit = (fun,id) => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if(err){
        return 
      }
      let payload = {};
      Object.keys(values).map(e=>{
        if(values[e]) payload[e] = values[e]
      })
      if(id) payload.id = id; 
      let data = {type:`UserList/${fun}`,payload}
      this.props.dispatch(data)
    }
  )}

  render() {
    const { getFieldDecorator } = this.props.form;
    const { users } = this.props
    const colunm = [{    
        title: '用户名',
        dataIndex: 'user',
        key: 'user',
      },
      {
        title: '密码',
        dataIndex: 'pass',
        key: 'pass',
      },
      {
        title: '电话',
        dataIndex: 'tel',
        key: 'tel',
      },
      {
        title: '操作',
        dataIndex: 'handle',
        key: 'handle',
        render: (text,record) => {
          return <div>
            <Button type="primary" size="small" onClick={()=>this.handleSubmit('editTable',record.id)}>修改</Button>&nbsp;
            <Button size="small"  onClick={()=>this.handleSubmit('delTable',record.id)}>删除</Button>
          </div>
        }
      }
    ]
    // console.log(this.props)
    return (
      <Form gutter={24} style={{width:600}}>
        <Form.Item gutter={18} label="user" {...formInput}>
            {getFieldDecorator('user', {
              label:'eeeeee',
              // rules: [{ required: true, message: 'Please input your user!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="User"
              />,
            )}
          </Form.Item>
          <Form.Item gutter={18} label="pass" {...formInput}>
            {getFieldDecorator('pass', {
              label:'eeeeee',
              // rules: [{ required: true, message: 'Please input your pass!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Pass"
              />,
            )}
          </Form.Item>
          <Form.Item gutter={18} label="tel" {...formInput}>
            {getFieldDecorator('tel', {
              label:'eeeeee',
              // rules: [{ required: true, message: 'Please input your tel!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Tel"
              />,
            )}
          </Form.Item>
        &nbsp;
          <Form.Item style={{textAlign:'center'}}>
            <Button id="add" type="primary" onClick={()=>this.handleSubmit('addTable')}>添加</Button>&nbsp;
            <Button id="find" type="defalut" onClick={()=>this.handleSubmit('findTable')}>查询</Button>&nbsp;
            <Button id="reflash" type="danger" onClick={()=>this.props.dispatch({type:'UserList/getAllUser'})}>重置</Button>&nbsp;
          </Form.Item>
        <Table dataSource={users} columns={colunm} rowKey="id"/>
      </Form>
    );
  }
  
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.UserList.users || null
  }
}

const UserList  = Form.create()(User)

export default connect(mapStateToProps)(UserList);
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
import antd, { Card, Form, Col, Row, Input, Icon, Button, Upload} from 'antd';
import baseUrl from '../../common/baseUrl'
import fs from 'fs'
const bodyParser = require('body-parser');

const {Component} = React;
const FormItem  = Form.Item
const formInput = {
  labelCol: {span:4},
  wrapperCol: {span:20},
}
class UploadImage extends Component {
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
                <FormItem>
                  {getFieldDecorator('images', {
                    rules: [{ required: true, message: 'Please input your user!' }],
                  })(
                    <Upload
                      action={`${baseUrl.base}/upload/image`}
                      headers={{
                        Authorization: localStorage.token
                      }}
                      // accept="image/*"
                      showUploadList={false}
                      // customRequest={this.uploadHandler}
                      listType="picture-card"
                      // fileList={fileList}
                      // onPreview={this.handlePreview}
                      onChange={(val) => this.props.dispatch({
                        type: `UploadImages/handleImgChange`,
                        payload: {val}
                      })}
                    >
                      {/* {fileList.length >= 8 ? null : uploadButton} */}
                    {/* </Upload> */}
                      {/* 这里的按钮最好加上type="button"，以避免在表单容器中触发表单提交，用Antd的Button组件则无需如此 */}
                      <button type="button" className="control-item button upload-button" data-title="插入图片">
                        <Icon type="picture" />
                      </button>
                    </Upload>
                  )}
                </FormItem>
              </Form>
            </Card>
          </Col>
        </Row>


      </div>
    );
  }
  
}
const mapStateToProps = (state, ownProps) => {
  // return {
  //   users: state.UserPage.user || null
  // }
}
UploadImage.propTypes = {};
const UploadImages  = Form.create()(UploadImage)

export default connect(mapStateToProps)(UploadImages);


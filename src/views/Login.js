import React from 'react';
import { Button, Row, Form, Input } from 'antd'
const FormItem = Form.Item


function Login({ form: { getFieldDecorator, validateFieldsAndScroll, } }) {
    function handleOk() {
        validateFieldsAndScroll((errors, values) => {
            if (!errors) {
                //alert('登录成功');
                let userInfo={auth:["user",'userlist','artcle','artcleManage','chart','chartArtcle']};
                userInfo.isLogin=true;
                sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
                window.location.reload();
            }
        })
    }
    return (
        <div className="login-page">
            <div className="login-warp">
                <div className="logo-warp">
                    <span>测试用</span>
                </div>
                <form>
                    <FormItem hasFeedback>
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入登陆邮箱'
                                },
                            ],
                        })(<Input onPressEnter={handleOk} placeholder="Email" />)}
                    </FormItem>
                    <FormItem hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入登陆密码'
                                },
                            ],
                        })(<Input type="password" onPressEnter={handleOk} placeholder="Password" />)}
                    </FormItem>
                    <Row>
                        <Button type="primary" onClick={handleOk}>
                            登 录
                        </Button>
                    </Row>

                </form>
            </div>
        </div>
    )
}
export default Form.create()(Login);
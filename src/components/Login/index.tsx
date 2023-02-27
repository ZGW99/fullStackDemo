import React from "react";
import { Button, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import request from '../../request/request'
import './index.css';

function Login() {
  const goNavigates = useNavigate();

  const onFinish = (values: Record<string, any>) => {

    request('https://console-mock.apipost.cn/mock/f0c7cc73-5dec-4da5-8efb-d6a4f55b1050/demo/login', 'post', {
      username: values?.username,
      password: values?.password
    })
      .then((res: any) => {
        const userToken = JSON.stringify(res?.data?.username) || '';
        localStorage.setItem('userName', '123');
        goNavigates('/home');
      })
  };

  return (
    <div className="loginBox">
      <div style={{ paddingTop: 145 }}>
        <div className='login'>
          <Form
            name="basic"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="账号"
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input placeholder="账号" />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password placeholder="密码" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
              <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
              <div className="numberLink">
                <a href="#">忘记密码</a>
                <a href="#">注册账号</a>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Login;
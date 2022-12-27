import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import './index.less';

function Login() {

  return (
    <div className="login">
      <Space direction="vertical">
        <Input style={{width: '100%'}} placeholder="input password" />
        <Input.Password
          size="large"
          placeholder="input password"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
        <div className="buttons">
          <Button type="primary">提交</Button>
        </div>
      </Space>
    </div>
  );
}
export default Login;
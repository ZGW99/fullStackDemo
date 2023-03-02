import React, { useEffect, useState } from "react";
import { Button, Descriptions, Form, Input } from 'antd';
import request from "../../request/request";
import styles from './index.less';

function Page3() {
  const [data, setData] = useState('');
  const [width, setWidth] = useState<number>(0);
  
  useEffect(() => {
    const screenwidth = window.innerWidth;
    if (screenwidth < 1172) {
      setWidth(320);
    } else {
      setWidth(600);
    }
  }, [])

  const onFinish = async (values: any) => {
    await request('https://api.openai.com/v1/chat/completions', 'POST', {
      "model": "gpt-3.5-turbo",
      "messages": [{ "role": "user", "content": values.userIput },{ "role": "system", "content": values.userIput }]
    }, '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').then((res: any) => {
      const resMsg = res?.choices?.[0]?.message.content;
      if (resMsg) {
        setData(resMsg);
      }
    })
  };


  return (
    <div className={styles.content} style={{ width: (width > 400) ? width : 320, margin: (width > 400) ? '24px auto' : '24px' }}>
      <Form
        name="basic"
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 22 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="输入"
          name="userIput"
        >
          <Input placeholder="请输入你的问题" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: (width > 400) ? 2 : 0, span: (width > 400) ? 16 : 0 }}>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Form.Item>
      </Form>
      <div >
        <Descriptions>
          <Descriptions.Item label=<div style={{ width: 60, fontWeight: 900 }}>对话信息</div>>
            <div style={{ maxWidth: width, wordWrap: "break-word", whiteSpace: 'pre-line' }}>{data}</div>
          </Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
}
export default Page3;
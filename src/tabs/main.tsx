import React from "react";
import Navigates from './Navigatiors';
import { Outlet } from 'react-router-dom';
import { Breadcrumb, Row, Col } from "antd";

function Main() {
  return (
    <Row>
      {/* <Col span={3}>
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
          }}
        >
          <Navigates />
        </div>
      </Col> */}
      {/* <Col span={21}>
        <div className="site-layout" style={{ padding: '0 50px', }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div id='context' style={{ width: '100%' }}><Outlet /></div>
        {/* </div>
      </Col> */}
    </Row>
  )
}

export default Main;
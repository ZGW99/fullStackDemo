import React from "react";
import Navigates from './Navigatiors';
import { Outlet } from 'react-router-dom';
import { Breadcrumb, Row, Col } from "antd";

function Main() {
  return (
    <Row>
      <Col>
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
          }}
        >
          <div
            style={{
              float: 'left',
              width: 120,
              height: 31,
              margin: '16px 24px 16px 0',
              background: 'rgba(255, 255, 255, 0.2)',
            }}
          />
          <Navigates />
        </div>
      </Col>
      <Col>
        <div className="site-layout" style={{ padding: '0 50px', }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div id='context'><Outlet /></div>
        </div>
      </Col>
    </Row>
  )
}

export default Main;
import React, { useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import '../../App.css';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem(<NavLink to="/home/first">Option 1</NavLink>, '/home'),
    getItem(<NavLink to="/home/second">Option 2</NavLink>, '/home/first'),
  ]),
];

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const clientHieght = window.screen.height;

function Navigates() {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div>
      <Menu
        mode="inline"
        theme="light"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: 198, height: clientHieght }}
        items={items}
      />
    </div>
  );
}

export default Navigates;

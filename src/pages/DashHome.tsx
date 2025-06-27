import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Outlet } from '@tanstack/react-router';
import type { MenuProps } from 'antd';

const { Header, Sider, Content } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: '1',
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    label: '2',
  },
  {
    key: '3',
    icon: <UploadOutlined />,
    label: '3',
  },
  {
    key: '4',
    icon: <BarChartOutlined />,
    label: '4',
  },
  {
    key: '5',
    icon: <TeamOutlined />,
    label: '5',
  },
  {
    key: '6',
    icon: <AppstoreOutlined />,
    label: '6',
  },
  {
    key: '7',
    icon: <CloudOutlined />,
    label: '7',
  },
  {
    key: '8',
    icon: <ShopOutlined />,
    label: '8',
  },
];

function DashHome() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={siderStyle}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: '16px', width: 64, height: 64 }}
          />
        </Header>
        <Content
          style={{
            margin: '20px 16px',
            padding: 10,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet /> {/* Renderização das rotas filhas, se houver */}
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashHome;

import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';

// components
import Welcome from '../components/welcome';
import User from '../components/user';
import VideoCamera from '../components/videoCamera';
import Upload from '../components/upload';
import CustomUser from '../components/customUser';

const { Header, Footer, Sider, Content } = Layout;

export default class rootLayout extends Component {
  render() {
    return (
      <div className="rootLayout">
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => { console.log(broken); }}
            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline">
              <Menu.Item key="1">
                <Link to="/user">
                  <Icon type="user" />
                  <span className="nav-text">user</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/videoCamera">
                  <Icon type="video-camera" />
                  <span className="nav-text">video-camera</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/upload">
                  <Icon type="upload" />
                  <span className="nav-text">upload</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/customUser">
                  <Icon type="user" />
                  <span className="nav-text">customUser</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/user" component={User} />
                <Route exact path="/videoCamera" component={VideoCamera} />
                <Route exact path="/upload" component={Upload} />
                <Route exact path="/customUser" component={CustomUser} />
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Avatar } from 'antd';

// components
import Welcome from '../components/welcome';
import User from '../components/user';
import VideoCamera from '../components/videoCamera';
import Upload from '../components/upload';
import CustomUser from '../components/customUser';

// containers
import CustomBreadcrumb from './breadcrumb';

// actions
import { setSelectedKeys } from '../reducers/layout'

const { Header, Footer, Sider, Content } = Layout;

const mapStateToProps = state => {
  return { keys: state.layout.keys }
}
const mapDispatchToProps = dispatch => ({
  onClick: (keys) => {
    dispatch(setSelectedKeys(keys))
  },
});

class rootLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: props.keys,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedKeys: nextProps.keys,
    })
  }

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
            <Menu theme="dark" mode="inline" selectedKeys={this.state.selectedKeys} onClick={item => this.props.onClick([].concat(item.key))}>
              <Menu.Item key="home">
                <Link to="/">
                  <Icon type="home" />
                  <span className="nav-text">home</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="user">
                <Link to="/user">
                  <Icon type="user" />
                  <span className="nav-text">user</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="videoCamera">
                <Link to="/videoCamera">
                  <Icon type="video-camera" />
                  <span className="nav-text">video-camera</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="upload">
                <Link to="/upload">
                  <Icon type="upload" />
                  <span className="nav-text">upload</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="customUser">
                <Link to="/customUser">
                  <Icon type="user" />
                  <span className="nav-text">customUser</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <div className="navigation">
                <span className="breadcrumb">
                  <CustomBreadcrumb />
                </span>
                <span className="avatar">
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </span>
              </div>

            </Header>
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

const CustomLayout = connect(mapStateToProps, mapDispatchToProps)(rootLayout);

export default CustomLayout;
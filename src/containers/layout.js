import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';
import { Layout, Menu, Icon, Avatar, Dropdown, message, Spin } from 'antd';

// components
import Home from '../components/home';
import Users from '../components/users';
import Channels from '../components/channels';
import Brands from '../components/brands';
import Statistics from '../components/statistics';

// containers
import CustomBreadcrumb from './breadcrumb';

// actions
import { setSelectedKeys } from '../reducers/layout';

// fake json data
import userData from '../json/user.json';
import statisticsData from '../json/statistics.json';

const { Header, Footer, Sider, Content } = Layout;

// wrapping/composing  todo:fadein effect
const UsersRoute = ({...rest}) => {
  // axios.get("")
  //   .then((res) => {
  //     return (
  //       <Route {...rest} render={props => (
  //           <Users {...props} data={res.data} />
  //       )}/>
  //     )
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .finally(function () {
  //     // always executed
  //   });

  return (
    <Route {...rest} render={() => (
      <Users data={userData} />
    )}/>
  )
}

const StatisticsRoute = ({...rest}) => {
  // axios.get("")
  //   .then((res) => {
  //     return (
  //       <Route {...rest} render={props => (
  //           <Users {...props} data={res.data} />
  //       )}/>
  //     )
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .finally(function () {
  //     // always executed
  //   });

  return (
    <Route {...rest} render={() => (
      <Statistics data={statisticsData} />
    )}/>
  )
}

const mapStateToProps = state => {
  return { keys: state.layout.keys }
}
const mapDispatchToProps = dispatch => ({
  onClick: (keys) => {
    dispatch(setSelectedKeys(keys));
  },
  onClickLogout: (history) => {
    localStorage.removeItem('token');
    history.push('/');
  },
});

class rootLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: props.location.pathname.replace('/', '') !== '' ? [props.location.pathname.replace('/', '')] : ['home'],
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 1000);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedKeys: nextProps.keys,
    })
  }

  menu = (
    <Menu onClick={() => this.props.onClickLogout(this.props.history)}>
      <Menu.Item key="1"><Icon type="profile" />
        <FormattedMessage
            id="avatar.profile"
            defaultMessage="profile"
        />
      </Menu.Item>
      <Menu.Item key="2"><Icon type="setting" />
        <FormattedMessage
            id="avatar.settings"
            defaultMessage="settings"
        />
      </Menu.Item>
      <Menu.Item key="3"><Icon type="logout" />
        <FormattedMessage
            id="avatar.logout"
            defaultMessage="logout"
        />
      </Menu.Item>
    </Menu>
  );

  handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }

  render() {
    return (
      <div className="rootLayout">
        <Spin spinning={this.state.loading} size="large">
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
                    <FormattedMessage
                        id="menu.home"
                        defaultMessage="home"
                    />
                  </Link>
                </Menu.Item>
                <Menu.Item key="users">
                  <Link to="/users">
                    <Icon type="user" />
                    <FormattedMessage
                        id="menu.users"
                        defaultMessage="users"
                    />
                  </Link>
                </Menu.Item>
                <Menu.Item key="channels">
                  <Link to="/channels">
                    <Icon type="fork" />
                    <FormattedMessage
                        id="menu.channels"
                        defaultMessage="channels"
                    />
                  </Link>
                </Menu.Item>
                <Menu.Item key="brands">
                  <Link to="/brands">
                    <Icon type="trademark" />
                    <FormattedMessage
                        id="menu.brands"
                        defaultMessage="brands"
                    />
                  </Link>
                </Menu.Item>
                <Menu.Item key="statistics">
                  <Link to="/statistics">
                    <Icon type="area-chart" />
                    <FormattedMessage
                        id="menu.statistics"
                        defaultMessage="statistics"
                    />
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
                    <Dropdown overlay={this.menu}>
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </Dropdown>
                  </span>
                </div>

              </Header>
              <Content style={{ margin: '24px 16px 0' }}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <UsersRoute exact path="/users" />
                  <Route exact path="/channels" component={Channels} />
                  <Route exact path="/brands" component={Brands} />
                  <StatisticsRoute exact path="/statistics" />
                </Switch>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Neverland 2018 by layman
              </Footer>
            </Layout>
          </Layout>
        </Spin>
      </div>
    );
  }
}

const CustomLayout = connect(mapStateToProps, mapDispatchToProps)(rootLayout);

export default CustomLayout;
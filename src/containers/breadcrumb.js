import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { Breadcrumb } from 'antd';

// actions
import { setSelectedKeys } from '../reducers/layout'

// todo: load from json
const breadcrumbNameMap = {
  '/home': 'Home',
  '/user': 'User',
  '/videoCamera': 'VideoCamera',
  '/upload': 'Upload',
  '/customUser': 'CustomUser',
};

const mapDispatchToProps = dispatch => ({
  onClick: (keys) => {
    dispatch(setSelectedKeys(keys))
  },
});

class rootBreadcrumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      location: nextProps.location,
    })
  }

  pathSnippets = () => {
    return this.state.location.pathname.split('/').filter(i => i);
  };
  extraBreadcrumbItems = () => this.pathSnippets().map((_, index) => {
    const url = `/${this.pathSnippets().slice(0, index + 1).join('/')}`;
    const selectedKey = `${this.pathSnippets().slice(index, index + 1)}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url} onClick={(e) => {
          e.preventDefault()
          this.props.onClick([].concat(selectedKey))}}>
          {breadcrumbNameMap[url]}
        </Link>
      </Breadcrumb.Item>
    );
  });
  breadcrumbItems = () => [(
    <Breadcrumb.Item key="/home">
      <Link to="/" onClick={() => this.props.onClick(['home'])} >
        {breadcrumbNameMap['/home']}
      </Link>
    </Breadcrumb.Item>
  )].concat(this.extraBreadcrumbItems());

  render() {
    return (
      <Breadcrumb>
        {this.breadcrumbItems()}
      </Breadcrumb>
    );
  }
}

const CustomBreadcrumb = withRouter(connect(null, mapDispatchToProps)(rootBreadcrumb));

export default CustomBreadcrumb;
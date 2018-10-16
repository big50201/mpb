import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl';
import { Breadcrumb } from 'antd';

// actions
import { setSelectedKeys } from '../reducers/layout'

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
    if (nextProps.location !== this.state.location) {
      this.setState({
        location: nextProps.location,
      });
    }
  }

  // will replace componentWillReceiveProps in React 17
  // static getDerivedStateFromProp(nextProps, prevState) {
  //   console.log(nextProps.location);
  //   console.log(prevState.location);

  //   if (nextProps.location !== prevState.location) {
  //     return {
  //       location: nextProps.location
  //     };
  //   }

  //   return null;
  // }

  pathSnippets = () => {
    return this.state.location.pathname.split('/').filter(i => i);
  };
  extraBreadcrumbItems = () => this.pathSnippets().map((_, index) => {
    const url = `/${this.pathSnippets().slice(0, index + 1).join('/')}`;
    const selectedKey = `${this.pathSnippets().slice(index, index + 1)}`;
    return (
      <Breadcrumb.Item key={selectedKey}>
        <Link to={url} onClick={(e) => {
          this.props.onClick([].concat(selectedKey))}}>
          <FormattedMessage
            id={`menu.${selectedKey}`}
            defaultMessage={`${selectedKey}`}
          />
        </Link>
      </Breadcrumb.Item>
    );
  });
  breadcrumbItems = () => [(
    <Breadcrumb.Item key="home">
      <Link to="/" onClick={() => this.props.onClick(['home'])}>
        <FormattedMessage
          id="menu.home"
          defaultMessage="home"
        />
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
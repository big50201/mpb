import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { i18n } from '../tools/i18n';

// actions
// import { getJWT } from '../reducers/login'

const FormItem = Form.Item;
const { language = 'en' } = localStorage;

const mapDispatchToProps = dispatch => ({
  getJWT: (username, password, history) => {
    dispatch({
      type: 'GET_JWT_TOKEN',
      username: username,
      password: password
    });

    history.push('/');
  },
});

class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);

        // store jwtToken to localstorage
        this.props.getJWT(values.userName, values.password, this.props.history);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: i18n(language, 'usernamePlaceholder') }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder={i18n(language, 'username')} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: i18n(language, 'passwordPlaceholder') }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder={i18n(language, 'password')} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>{i18n(language, 'rememberMe')}</Checkbox>
          )}
          <a className="login-form-forgot" href="">{i18n(language, 'forgetPassword')}</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            {i18n(language, 'logIn')}
          </Button>
          {i18n(language, 'or')} <a href="">{i18n(language, 'registerNow')}</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
const CustomNormalLoginForm = connect(null, mapDispatchToProps)(WrappedNormalLoginForm);

export default CustomNormalLoginForm;
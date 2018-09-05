import React from "react";
import { Table } from 'antd';
import { i18n } from '../tools/i18n';

const { language = 'en' } = localStorage;
const columns = [{
  title: i18n(language, 'user.table.columns.name'),
  dataIndex: 'name',
  render: text => <a href="">{text}</a>,
}, {
  title: i18n(language, 'user.table.columns.age'),
  dataIndex: 'age',
}, {
  title: i18n(language, 'user.table.columns.address'),
  dataIndex: 'address',
}];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const Users = (props) => {
  return (
    <div className="users" style={{ padding: 24, background: '#fff', minHeight: 600 }}>
      <Table rowSelection={rowSelection} columns={columns} dataSource={props.data} />
    </div>
  );
};

export default Users;
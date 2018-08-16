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

// fake data
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Disabled User',
  age: 99,
  address: 'Sidney No. 1 Lake Park',
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

const Users = () => {
  return (
    <div className="users" style={{ padding: 24, background: '#fff', minHeight: 600 }}>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};

export default Users;
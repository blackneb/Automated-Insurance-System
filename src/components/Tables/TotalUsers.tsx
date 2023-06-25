import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input, Modal } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import {users} from '../../data/users';
import UsersModal from '../Modals/UsersModal';
const { Search } = Input;

interface DataType{
  f_name:string,
  l_name:string,
  username:string
}

const TotalUsers = ({data}:any) => {
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value.toLowerCase());
  };
  

  const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setSortedInfo(sorter as SorterResult<DataType>);
  };
  const onViewRow = (record:any) => {
    setSelectedValue(record)
    setOpenModal(true);
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'User Name',
      dataIndex: 'f_name',
      key: 'f_name',
      sorter: (a, b) => a.f_name.length - b.f_name.length,
      sortOrder: sortedInfo.columnKey === 'f_name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Phone Number',
      dataIndex: 'l_name',
      key: 'l_name',
      sorter: (a, b) => a.l_name.length - b.l_name.length,
      sortOrder: sortedInfo.columnKey === 'l_name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'E-mail',
      dataIndex: 'username',
      key: 'username',
      sorter: (a, b) => a.username.length - b.username.length,
      sortOrder: sortedInfo.columnKey === 'username' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (record) => <div><Button onClick={()=>{ onViewRow(record); }} type='link'>view</Button></div> ,
    },
  ];
  return (
    <div className='mx-4 mt-4 bg-white shadow rounded-md border-0 p-2 shadow'>
      <Modal
        title="Users Information"
        style={{ top: 20 }}
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        width={1200}
      >
        < UsersModal data={selectedValue} />
      </Modal>
      <p>Total Users</p>
      <Input className='mb-2' placeholder="Search With Client Name" allowClear onChange={onChange} />
      <Table columns={columns} scroll={{ x: 900 }} style={{minHeight:700}} dataSource={data} onChange={handleChange} />
    </div>
  )
}

export default TotalUsers

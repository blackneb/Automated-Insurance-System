import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input, Modal } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import {users} from '../../data/users';
import UsersModal from '../Modals/UsersModal';
const { Search } = Input;

interface DataType{
    ID:string,
    fullName:string,
    userName:string,
    phoneNumber:string,
    email:string,
  }

const AdminExpertsTable = ({data}:any) => {
    const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value.toLowerCase());
  };
  

  const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setSortedInfo(sorter as SorterResult<DataType>);
  };
  const onViewRow = (record:any) => {
    setOpenModal(true);
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'User Name',
      dataIndex: 'fullName',
      key: 'fullName',
      sorter: (a, b) => a.fullName.length - b.fullName.length,
      sortOrder: sortedInfo.columnKey === 'fullName' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      sorter: (a, b) => a.phoneNumber.length - b.phoneNumber.length,
      sortOrder: sortedInfo.columnKey === 'phoneNumber' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.length - b.email.length,
      sortOrder: sortedInfo.columnKey === 'email' ? sortedInfo.order : null,
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
        title="Experts Information"
        style={{ top: 20 }}
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        width={1200}
      >
      </Modal>
      <p>Total Experts</p>
      <Input className='mb-2' placeholder="Search With Expert Name" allowClear onChange={onChange} />
      <Table columns={columns} scroll={{ x: 1300 }} dataSource={data.filter((items:any) => items.fullName.toLowerCase().includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default AdminExpertsTable

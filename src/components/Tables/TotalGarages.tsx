import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input, Modal } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import GarageModal from '../Modals/GarageModal';
const { Search } = Input;

interface DataType{
  name:string,
  phone:string,
  email:string,
  address:string,
}

const TotalGarages = ({data}:any) => {
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
      title: 'Garage Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
      sorter: (a, b) => a.phone.length - b.phone.length,
      sortOrder: sortedInfo.columnKey === 'phone' ? sortedInfo.order : null,
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
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
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
        title="Garages"
        style={{ top: 20 }}
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        width={1200}
      >
        < GarageModal data={selectedValue}/>
      </Modal>
      <p>Total Garages</p>
      <Input className='mb-2' placeholder="Search With Garage Name" allowClear onChange={onChange} />
      <Table columns={columns} scroll={{ x: 900 }} style={{minHeight:700}} dataSource={data.filter((items:any) => items.name.toLowerCase().includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default TotalGarages

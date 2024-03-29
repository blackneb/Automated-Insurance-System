import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import {users} from '../../data/users';
const { Search } = Input;

interface DataType{
  ID:string,
  fullName:string,
  userName:string,
  phoneNumber:string,
  Email:string,
  insuranceTypes:string,
  files:string,
}

const OnClaimUsers = ({data}:any) => {

    const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [searchValue, setSearchValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value.toLowerCase());
  };
  

  const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setSortedInfo(sorter as SorterResult<DataType>);
  };

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
      title: 'Insurance Types',
      dataIndex: 'insuranceTypes',
      key: 'insuranceTypes',
      sorter: (a, b) => a.insuranceTypes.length - b.insuranceTypes.length,
      sortOrder: sortedInfo.columnKey === 'insuranceTypes' ? sortedInfo.order : null,
      ellipsis: true,
    }
  ];
  return (
    <div className='mx-4 mt-4 bg-white shadow rounded-md border-0 p-2 shadow'>
      <p>On Claim Users</p>
      <Input className='mb-2' placeholder="Search With Client Name" allowClear onChange={onChange} />
      <Table scroll={{ x: 420, y: 200 }} style={{maxWidth:450 }} columns={columns} dataSource={data.filter((items:any) => items.fullName.toLowerCase().includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default OnClaimUsers

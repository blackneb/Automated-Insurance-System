import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
const { Search } = Input;

interface DataType{
  ID:string,
  garageName:string,
  phoneNumber:string,
  email:string,
  address:string,
  documents:string,
}

const WorkingGarages = ({data}:any) => {
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
      title: 'Garage Name',
      dataIndex: 'garageName',
      key: 'garageName',
      sorter: (a, b) => a.garageName.length - b.garageName.length,
      sortOrder: sortedInfo.columnKey === 'garageName' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Vehicle Working',
      dataIndex: 'documents',
      key: 'documents',
      sorter: (a, b) => a.documents.length - b.documents.length,
      sortOrder: sortedInfo.columnKey === 'files' ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];
  return (
    <div className='mx-4 mt-4 bg-white shadow rounded-md border-0 p-2 shadow'>
      <p>Total Users</p>
      <Input className='mb-2' placeholder="Search With Client Name" allowClear onChange={onChange} />
      <Table columns={columns} dataSource={data.filter((items:any) => items.garageName.toLowerCase().includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default WorkingGarages

import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import { Select } from 'antd';

const { Search } = Input;

interface DataType{
  ID:string,
  garageName:string,
  phoneNumber:string,
  email:string,
  address:string,
  documents:string,
}

const BidsOnVehicle = ({data}:any) => {
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
      title: 'Bid',
      dataIndex: 'documents',
      key: 'documents',
      sorter: (a, b) => a.documents.length - b.documents.length,
      sortOrder: sortedInfo.columnKey === 'files' ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];
  return (
    <div className='mx-4 mt-4 bg-white shadow rounded-md border-0 p-2 shadow'>
      <p>Bids on Vehicles</p>
      <Select
      className='mb-2 w-fit'
      defaultValue="Vehicle001"
      style={{ width: 120 }}
      onChange={()=>{}}
      options={[
        { value: 'vehicle001', label: 'vehicle001' },
        { value: 'vehicle002', label: 'vehicle002' },
        { value: 'vehicle003', label: 'vehicle003' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
      <Table scroll={{x:200, y: 300 }} style={{ maxWidth:500, minWidth:300 }} columns={columns} dataSource={data.filter((items:any) => items.garageName.toLowerCase().includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default BidsOnVehicle
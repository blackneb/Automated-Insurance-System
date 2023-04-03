import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
const { Search } = Input;

interface DataType{
    date:string,
    vehicleId:string,
    itemsNumber:string,
    totalAmount:string,
    ownerName:string,
  }

const GarageSubBids = ({data}:any) => {
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
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => a.date.length - b.date.length,
      sortOrder: sortedInfo.columnKey === 'date' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Vehicle ID',
      dataIndex: 'vehicleId',
      key: 'vehicleId',
      sorter: (a, b) => a.vehicleId.length - b.vehicleId.length,
      sortOrder: sortedInfo.columnKey === 'vehicleId' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Items Number',
      dataIndex: 'itemsNumber',
      key: 'itemsNumber',
      sorter: (a, b) => a.itemsNumber.length - b.itemsNumber.length,
      sortOrder: sortedInfo.columnKey === 'itemsNumber' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Total Amount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
      sorter: (a, b) => a.totalAmount.length - b.totalAmount.length,
      sortOrder: sortedInfo.columnKey === 'totalAmount' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Owner Name',
      dataIndex: 'ownerName',
      key: 'ownerName',
      sorter: (a, b) => a.ownerName.length - b.ownerName.length,
      sortOrder: sortedInfo.columnKey === 'ownerName' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <div><Button type='link'>view</Button></div> ,
    },
  ];
  return (
    <div className='mx-4 mt-4 bg-white shadow rounded-md border-0 p-2 shadow'>
      <p>Submitted Bids</p>
      <Input className='mb-2' placeholder="Search With Vehicle ID" allowClear onChange={onChange} />
      <Table columns={columns} scroll={{ x: 900 }} style={{minHeight:700}} dataSource={data.filter((items:any) => items.vehicleId.toLowerCase().includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default GarageSubBids

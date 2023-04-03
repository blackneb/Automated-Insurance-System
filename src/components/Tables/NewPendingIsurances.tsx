import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import {vehicles} from '../../data/vehicles';
const { Search } = Input;

interface DataType {
  appointedDate: string;
  proposerName: string;
  vehicleId: string;
  estimatedPrice: string;
  carBrand:string;
}

const NewPendingIsurances = ({data}:any) => {
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
      title: 'Appointed Date',
      dataIndex: 'appointedDate',
      key: 'appointedDate',
      sorter: (a, b) => a.appointedDate.length - b.appointedDate.length,
      sortOrder: sortedInfo.columnKey === 'appointedDate' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Proposer',
      dataIndex: 'proposerName',
      key: 'proposerName',
      sorter: (a, b) => a.proposerName.length - b.proposerName.length,
      sortOrder: sortedInfo.columnKey === 'proposerName' ? sortedInfo.order : null,
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
      title: 'Estimated Price',
      dataIndex: 'estimatedPrice',
      key: 'estimatedPrice',
      sorter: (a, b) => a.estimatedPrice.length - b.estimatedPrice.length,
      sortOrder: sortedInfo.columnKey === 'estimatedPrice' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Car Brand',
      dataIndex: 'carBrand',
      key: 'carBrand',
      sorter: (a, b) => a.carBrand.length - b.carBrand.length,
      sortOrder: sortedInfo.columnKey === 'carBrand' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <div> <Button type='link'>View</Button></div> ,
    },
  ];
  return (
    <div className='mx-4 mt-4 bg-white shadow rounded-md border-0 p-2 shadow'>
      <p>New pending vehicle insurances</p>
      <Input className='mb-2' placeholder="Search with Proposer Name" allowClear onChange={onChange} />
      <Table columns={columns} scroll={{ x: 1300 }} dataSource={data.filter((items:any) => items.proposerName.toLowerCase().includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default NewPendingIsurances

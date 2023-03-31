import React, {useState} from 'react'
import type { TableProps } from 'antd';
import { Button, Space, Table,Input } from 'antd';
import { Progress } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import {vehicles} from '../../data/vehicles';
const { Search } = Input;

const UsersMyClaims = ({data}:any) => {
  interface DataType {
    claimDate: string;
    accidentId: string;
    progress:string;
    proposer:string;
    key:string
  }
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [searchValue, setSearchValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  

  const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setSortedInfo(sorter as SorterResult<DataType>);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: 'Date',
      dataIndex: 'claimDate',
      key: 'claimDate',
      sorter: (a, b) => a.claimDate.length - b.claimDate.length,
      sortOrder: sortedInfo.columnKey === 'claimDate' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Accident ID',
      dataIndex: 'accidentId',
      key: 'accidentId',
      sorter: (a, b) => a.accidentId.length - b.accidentId.length,
      sortOrder: sortedInfo.columnKey === 'accidentId' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Vehcile Owner',
      dataIndex: 'proposer',
      key: 'proposer',
      sorter: (a, b) => a.proposer.length - b.proposer.length,
      sortOrder: sortedInfo.columnKey === 'proposer' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Progress',
      dataIndex: '',
      key: 'x',
      render: () => <div><Progress percent={100} status="active" /></div> ,
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
      <p>My Claims</p>
      <Input className='mb-2' placeholder="Search with Date" allowClear onChange={onChange} />
      <Table columns={columns} dataSource={data.filter((items:any) => items.proposer.includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default UsersMyClaims

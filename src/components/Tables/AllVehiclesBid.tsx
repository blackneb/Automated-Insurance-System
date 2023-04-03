import React, {useState} from 'react'
import type { TableProps } from 'antd';
import { Button, Space, Table,Input } from 'antd';
import { Progress } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import {vehicles} from '../../data/vehicles';
const { Search } = Input;

interface DataType {
    date: string;
    proposer: string;
    items:string;
    deadline:string
  }


const AllVehiclesBid = ({data}:any) => {
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
        title: 'Client Name',
        dataIndex: 'proposer',
        key: 'proposer',
        sorter: (a, b) => a.proposer.length - b.proposer.length,
        sortOrder: sortedInfo.columnKey === 'proposer' ? sortedInfo.order : null,
        ellipsis: true,
      },
      {
        title: 'Items Number',
        dataIndex: 'items',
        key: 'items',
        sorter: (a, b) => a.items.length - b.items.length,
        sortOrder: sortedInfo.columnKey === 'items' ? sortedInfo.order : null,
        ellipsis: true,
      },
      {
        title: 'Deadline',
        dataIndex: 'deadline',
        key: 'deadline',
        sorter: (a, b) => a.deadline.length - b.deadline.length,
        sortOrder: sortedInfo.columnKey === 'deadline' ? sortedInfo.order : null,
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
      <p>Active Bids</p>
      <Input className='mb-2' placeholder="Search with Client name" allowClear onChange={onChange} />
      <Table columns={columns} scroll={{ x: 900 }} dataSource={data.filter((items:any) => items.proposer.toLowerCase().includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default AllVehiclesBid

import React, {useState} from 'react'
import type { TableProps } from 'antd';
import { Button, Space, Table,Input, Modal } from 'antd';
import { Progress } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import {vehicles} from '../../data/vehicles';
import ProgressModal from '../Modals/ProgressModal';
const { Search } = Input;

interface DataType {
    date: string;
    type: string;
    contractId:string;
  }

const CalanderTable = ({data}:any) => {
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
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
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => a.date.length - b.date.length,
      sortOrder: sortedInfo.columnKey === 'date' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      sorter: (a, b) => a.type.length - b.type.length,
      sortOrder: sortedInfo.columnKey === 'type' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Contract ID',
      dataIndex: 'contractId',
      key: 'contractId',
      sorter: (a, b) => a.contractId.length - b.contractId.length,
      sortOrder: sortedInfo.columnKey === 'contractId' ? sortedInfo.order : null,
      ellipsis: true,
    }
  ];
  return (
    <div className='mx-4 mt-4 bg-white shadow rounded-md border-0 p-2 shadow max-w-lg'>
      <p>Today Actions</p>
      <Input className='mb-2' placeholder="Search with Client name" allowClear onChange={onChange} />
      <Table scroll={{ x: 420, y: 200 }} style={{maxWidth:450 }} columns={columns} dataSource={data.filter((items:any) => items.date.includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default CalanderTable

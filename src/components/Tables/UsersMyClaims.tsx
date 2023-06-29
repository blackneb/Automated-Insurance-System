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
  accident_id: string;
  progress:any;
  proposer:string;
  id:string
}

const UsersMyClaims = ({data}:any) => {
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedvalue, setSelectedValue] = useState();
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  

  const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setSortedInfo(sorter as SorterResult<DataType>);
  };
  const onViewRow = (record:any) => {
    setSelectedValue(record);
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
      title: 'Accident ID',
      dataIndex: 'accident_id',
      key: 'accident_id',
      sorter: (a, b) => a.accident_id.length - b.accident_id.length,
      sortOrder: sortedInfo.columnKey === 'accident_id' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Vehcile ID',
      dataIndex: 'proposer',
      key: 'proposer',
      sorter: (a, b) => a.proposer.length - b.proposer.length,
      sortOrder: sortedInfo.columnKey === 'proposer' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
      render: (progress) => <div><Progress percent={progress} status="active" /></div> ,
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
        title="Claim Progress"
        style={{ top: 20 }}
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        width={1200}
      >
        <ProgressModal data={selectedvalue}/>
      </Modal>
      <p>My Claims</p>
      <Input className='mb-2' placeholder="Search with Date" allowClear onChange={onChange} />
      <Table columns={columns} scroll={{ x: 900 }} style={{minHeight:700}} dataSource={data} onChange={handleChange} />
    </div>
  )
}

export default UsersMyClaims

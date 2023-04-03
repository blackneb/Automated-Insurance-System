import React, {useState} from 'react'
import type { TableProps } from 'antd';
import { Button, Space, Table,Input, Modal } from 'antd';
import { Progress } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import {vehicles} from '../../data/vehicles';
import { PlusOutlined, PlusCircleOutlined } from '@ant-design/icons'
import ProgressModal from '../Modals/ProgressModal';

const { Search } = Input;

interface DataType {
  claimDate: string;
  accidentId: string;
  progress:string;
  proposer:string;
  key:string
}

const ActiveClaims = ({data}:any) => {
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
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <div><Button type='link' onClick={()=>setOpenModal(true)}>view</Button></div> ,
    },
    {
      title: 'Bids',
      dataIndex: '',
      key: 'x',
      render: () => <div><Button icon={<PlusOutlined/>}>Create New Bid</Button></div> ,
    },
  ];
  return (
    <div className='mx-4 mt-4 bg-white shadow rounded-md border-0 p-2 shadow'>
      <Modal
        title="Vehicles"
        style={{ top: 20 }}
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        width={1200}
      >
        <ProgressModal/>
      </Modal>
      <p>New Claims</p>
      <Input className='mb-2' placeholder="Search with Date" allowClear onChange={onChange} />
      <Table columns={columns} scroll={{x:400, y: 300 }} style={{ maxWidth:700, minWidth:300 }} dataSource={data.filter((items:any) => items.proposer.includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default ActiveClaims

import React, {useState} from 'react'
import type { TableProps } from 'antd';
import { Button, Space, Table,Input, Modal } from 'antd';
import { Progress } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import {vehicles} from '../../data/vehicles';
import { PlusOutlined, PlusCircleOutlined } from '@ant-design/icons'
import ProgressModal from '../Modals/ProgressModal';
import CreateNewBidModal from '../Modals/CreateNewBidModal';

const { Search } = Input;

interface DataType {
  date: string;
  accident_id: string;
  progress:string;
  proposer:string;
  id:string
}

const ActiveClaims = ({data}:any) => {
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openModalNewBid, setOpenModalNewBid] = useState(false);
  const [ selectedValue, setSelectedValue ] = useState();
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
    setOpenModalNewBid(true)
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => a.date.length - b.date.length,
      sortOrder: sortedInfo.columnKey === 'claimDate' ? sortedInfo.order : null,
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
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <div><Button type='link' onClick={()=>setOpenModal(true)}>view</Button></div> ,
    },
    {
      title: 'Bids',
      dataIndex: '',
      key: 'x',
      render: (record) => <div><Button onClick={()=>{ onViewRow(record); }} icon={<PlusOutlined/>}>Create New Bid</Button></div> ,
    },
  ];
  return (
    <div className='mx-4 mt-4 bg-white shadow rounded-md border-0 p-2 shadow'>
      <Modal
        title="On Claim Vehicles"
        style={{ top: 20 }}
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        width={1200}
      >
        <ProgressModal/>
      </Modal>
      <Modal
        title="Create New Bid for Garages"
        style={{ top: 20 }}
        open={openModalNewBid}
        onOk={() => setOpenModalNewBid(false)}
        onCancel={() => setOpenModalNewBid(false)}
        width={800}
      >
        <CreateNewBidModal data={selectedValue}/>
      </Modal>
      <p>New Claims</p>
      <Input className='mb-2' placeholder="Search with Date" allowClear onChange={onChange} />
      <Table columns={columns} scroll={{x:400, y: 300 }} style={{ maxWidth:700, minWidth:300 }} dataSource={data} onChange={handleChange} />
    </div>
  )
}

export default ActiveClaims

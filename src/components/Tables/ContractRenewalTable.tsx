import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input, Modal } from 'antd';
import { Progress } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import {vehicles} from '../../data/vehicles';
import VehiclesModal from '../Modals/VehiclesModal';
import { PlusOutlined, PlusCircleOutlined } from '@ant-design/icons'
import axios from 'axios';
import { useSelector } from 'react-redux';

const { Search } = Input;

interface DataType {
    vehicleId: string;
    proposerName: string;
    contractPrice: string;
    contractType: string;
    expireDate:string;
  }

const ContractRenewalTable = ({data}:any) => {
  console.log(data);
    const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value.toLowerCase());
  };
  

  const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setSortedInfo(sorter as SorterResult<DataType>);
  };

  const onViewRow = (record:any) => {
    setOpenModal(true);
  }

  const sendNotification = async () => {
    const emailPost = {
      email:"",
      title:"Contract Renewal",
      message:"Dear Customer, Your Contract has been expired please Make a contact",
    }
    await axios.post("http://ais.blackneb.com/api/ais/sendemail",emailPost).then((response:any) => {
      console.log(response.data);
    })
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Vehcile ID',
      dataIndex: 'vehicleId',
      key: 'vehicleId',
      sorter: (a, b) => a.vehicleId.length - b.vehicleId.length,
      sortOrder: sortedInfo.columnKey === 'vehicleId' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Proposer Name',
      dataIndex: 'proposerName',
      key: 'proposerName',
      sorter: (a, b) => a.proposerName.length - b.proposerName.length,
      sortOrder: sortedInfo.columnKey === 'proposerName' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (record) => <div><Button onClick={()=>{ onViewRow(record); }} type='link'>view</Button></div> ,
    },
    {
      title: 'Bids',
      dataIndex: '',
      key: 'x',
      render: (record) => 
        <div>
          <Button onClick={()=>{ sendNotification() }}>
            Send Renewal Email
          </Button>
        </div> ,
    },
  ];
  return (
    <div className='mx-4 mt-4 bg-white shadow rounded-md border-0 p-2 shadow'>
      <p>Contract renewal Table</p>
      <Modal
        title="Contract Renewal"
        style={{ top: 20 }}
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        width={1200}
      >
        <VehiclesModal/>
      </Modal>
      <Input className='mb-2' placeholder="Search with proposer name" allowClear onChange={onChange} />
      <Table scroll={{x:400, y: 300 }} style={{ maxWidth:700, minWidth:300 }}  columns={columns} dataSource={data.filter((items:any) => items.proposerName.toLowerCase().includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default ContractRenewalTable

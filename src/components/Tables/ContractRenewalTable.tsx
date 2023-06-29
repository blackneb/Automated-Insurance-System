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
  vehicle: string;
  Full_Name:string;
  contract_date: string;
  contract_price: string;
  contract_type: string;
  expire_date:string;
  }

const ContractRenewalTable = ({data}:any) => {
  console.log(data);
    const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const proposerid:string = data.proposer;
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

  const sendNotification = async () => {

    await axios.post("https://ais.blackneb.com/api/ais/getproposeremail",{proposerID:proposerid}).then((response:any) => {
      console.log(response.data);
      const emailPost = {
        email:response.data,
        title:"Contract Renewal",
        message:"Dear Customer, Your Contract has been expired please Make a contact",
      }
      axios.post("https://ais.blackneb.com/api/ais/sendemail",emailPost).then((response:any) => {
        console.log(response.data);
      })
    })
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Vehcile ID',
      dataIndex: 'vehicle',
      key: 'vehicle',
      sorter: (a, b) => a.vehicle.length - b.vehicle.length,
      sortOrder: sortedInfo.columnKey === 'vehicle' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Proposer Name',
      dataIndex: 'Full_Name',
      key: 'Full_Name',
      sorter: (a, b) => a.Full_Name.length - b.Full_Name.length,
      sortOrder: sortedInfo.columnKey === 'Full_Name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Contract Date',
      dataIndex: 'contract_date',
      key: 'contract_date',
      sorter: (a, b) => a.contract_date.length - b.contract_date.length,
      sortOrder: sortedInfo.columnKey === 'contract_date' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Expire Date',
      dataIndex: 'expire_date',
      key: 'expire_date',
      sorter: (a, b) => a.expire_date.length - b.expire_date.length,
      sortOrder: sortedInfo.columnKey === 'expire_date' ? sortedInfo.order : null,
      ellipsis: true,
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
      <Table scroll={{x:400, y: 300 }} style={{ maxWidth:700, minWidth:300 }}  columns={columns} dataSource={data.filter((items:any) => items.Full_Name.includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default ContractRenewalTable

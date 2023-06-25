import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input, Modal } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import VehiclesModal from '../Modals/VehiclesModal';
import {vehicles} from '../../data/vehicles';
import NewInsuranceVehicleModal from '../Modals/NewInsuranceVehicleModal';
const { Search } = Input;

interface DataType {
  appointmentdate: string;
  proposer: string;
  purpose: string;
  cover_required: string;
  currentestimation:string;
}

const Vechicles = ({data}:any) => {
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedvalue, setSelectedValue] = useState();
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value.toLowerCase());
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
      title: 'Appointed Date',
      dataIndex: 'appointmentdate',
      key: 'appointmentdate',
      sorter: (a, b) => a.appointmentdate.length - b.appointmentdate.length,
      sortOrder: sortedInfo.columnKey === 'appointedDate' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Proposer',
      dataIndex: 'proposer',
      key: 'proposer',
      sorter: (a, b) => a.proposer.length - b.proposer.length,
      sortOrder: sortedInfo.columnKey === 'proposer' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Vehicle Purpose',
      dataIndex: 'purpose',
      key: 'purpose',
      sorter: (a, b) => a.purpose.length - b.purpose.length,
      sortOrder: sortedInfo.columnKey === 'purpose' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Cover Required',
      dataIndex: 'cover_required',
      key: 'cover_required',
      sorter: (a, b) => a.cover_required.length - b.cover_required.length,
      sortOrder: sortedInfo.columnKey === 'cover_required' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Current Estimation',
      dataIndex: 'currentestimation',
      key: 'currentestimation',
      sorter: (a, b) => a.currentestimation.length - b.currentestimation.length,
      sortOrder: sortedInfo.columnKey === 'currentestimation' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (record) => <div><Button onClick={()=>{ onViewRow(record); }} type='link'>view</Button></div>
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
        <VehiclesModal data={selectedvalue}/>
      </Modal>
      <p>New pending vehicle insurances</p>
      <Input className='mb-2' placeholder="Search with Proposer Name" allowClear onChange={onChange} />
      <Table columns={columns} scroll={{ x: 900 }} style={{minHeight:700}} dataSource={data.filter((items:any) => items.purpose.toLowerCase().includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default Vechicles
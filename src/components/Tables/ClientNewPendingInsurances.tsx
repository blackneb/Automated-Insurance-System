import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input, Modal } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import {vehicles} from '../../data/vehicles';
import NewInsuranceVehicleModal from '../Modals/NewInsuranceVehicleModal';
import ClientNewInsuranceVehicleModal from '../Modals/ClientNewInsuranceVehicleModal';
const { Search } = Input;

interface DataType {
  appointedDate: string;
  proposerName: string;
  vehicleId: string;
  estimatedPrice: string;
  carBrand:string;
  contractPrice:string;
}

const ClientNewPendingIsurances = ({data}:any) => {
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
        title: 'contractPrice',
        dataIndex: 'contractPrice',
        key: 'contractPrice',
        sorter: (a, b) => a.contractPrice.length - b.contractPrice.length,
        sortOrder: sortedInfo.columnKey === 'contractPrice' ? sortedInfo.order : null,
        ellipsis: true,
      },    
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <div> <Button type='link' onClick={()=>setOpenModal(true)}>View</Button></div> ,
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
        <ClientNewInsuranceVehicleModal/>
      </Modal>
      <p>New pending vehicle insurances</p>
      <Input className='mb-2' placeholder="Search with Proposer Name" allowClear onChange={onChange} />
      <Table columns={columns} scroll={{ x: 900 }} style={{minHeight:700}} dataSource={data.filter((items:any) => items.proposerName.toLowerCase().includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default ClientNewPendingIsurances

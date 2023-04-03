import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import { Card, Space } from 'antd';
import ContractListTable from './Tables/ContractListTable';
import ContractRenewalTable from './Tables/ContractRenewalTable';
import {contract} from '../data/contract';


const ContractRenewal = () => {
  const dispatch = useDispatch();
  const data:any[] = contract;
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Contract renewal",path:"/analytics"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])
  return (
    <div className='mt-4 ml-4 h-screen'>
      <div className='flex flex-row flex-wrap justify-center'>
        <div className='flex flex-col flex-wrap'>
            <Card className='mx-4 my-4' size="small" title="Expired Contracts" style={{ width: 300 }}>
              <p>Number</p>
            </Card>
            <Card className='mx-4 my-4' size="small" title="Contract Renewal" style={{ width: 300 }}>
              <p>Number</p>
            </Card>
          </div>
          <ContractRenewalTable data={data}/>
        </div>
        <ContractListTable data={data}/>
    </div>
  )
}

export default ContractRenewal

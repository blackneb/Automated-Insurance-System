import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import { Card, Space } from 'antd';
import ContractListTable from './Tables/ContractListTable';
import ContractRenewalTable from './Tables/ContractRenewalTable';
import {contract} from '../data/contract';
import axios from 'axios';


const ContractRenewal = () => {
  const dispatch = useDispatch();
  const data:any[] = contract;
  const [sampleData, setSampleDate] = useState([]);
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Contract renewal",path:"/analytics"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
    axios.get("https://ais.blackneb.com/api/ais/getcontracts").then((response:any) => {
      setSampleDate(response.data);
      console.log(response.data);
    })
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
        <ContractListTable data={sampleData}/>
    </div>
  )
}

export default ContractRenewal

import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import {contract} from '../data/contract';
import ProposerContractTable from './Tables/ProposerContractTable';
import { Button, Modal } from 'antd';


const ProposerContract = () => {
  const dispatch = useDispatch();
  const [openModalVehicle, setOpenModalVehicle] = useState(false);
  const [openModalHealth, setOpenModalHealth] = useState(false);  
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Contract",path:"/userclaims"},
  ]
  const data:any[] = contract;
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])
  return (
    <div className='mt-4 ml-4 h-screen'>
      <ProposerContractTable data={data} />
    </div>
  )
}

export default ProposerContract

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import {contract} from '../data/contract';
import ProposerContractTable from './Tables/ProposerContractTable';
import { Button, Modal } from 'antd';
import axios from 'axios';


const ProposerContract = () => {
  const dispatch = useDispatch();
  const [openModalVehicle, setOpenModalVehicle] = useState(false);
  const [openModalHealth, setOpenModalHealth] = useState(false);  
  const [sampleData, setSampleDate] = useState([]);
  const pid = useSelector((state:any) => state.userType.proposerID)
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Contract",path:"/userclaims"},
  ]
  const data:any[] = contract;
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
    axios.get("https://ais.blackneb.com/api/ais/getcontracts").then((response:any) => {
      setSampleDate(response.data.filter((items:any) => items.proposer === pid && items.is_approved === "True"));
      console.log(response.data);
    })
  },[])
  return (
    <div className='mt-4 ml-4 h-screen'>
      <ProposerContractTable data={sampleData} />
    </div>
  )
}

export default ProposerContract

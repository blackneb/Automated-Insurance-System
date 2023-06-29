import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Result } from 'antd';
import { getCookie, setCookie } from 'typescript-cookie'



const VerifyPayment = () => {
    const navigate = useNavigate();
    const reference = useSelector((state:any) => state.reference);
    const goToMainPage = () => {
      navigate("/")
    }
    useEffect(() => {
      const id = getCookie("vehicleid")
      axios.post("https://ais.blackneb.com/api/ais/approvecontract", {id}).then((response:any) => {
        console.log(response.data);
      })            
          
    }, [])
  return (
    <div>
      <Result
        status="success"
        title="Successfully paid!"
        subTitle=""
        extra={[
          <Button key="buy" onClick={()=> {goToMainPage();}}>Go to Main Page</Button>,
        ]}
      />
    </div>
  )
}

export default VerifyPayment

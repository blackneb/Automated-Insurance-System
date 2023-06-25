import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const VerifyPayment = () => {
    const navigate = useNavigate();
    const reference = useSelector((state:any) => state.reference);
    useEffect(() => {

        const verify = async() => {
            try{
                const url = 'https://api.chapa.co/v1/transaction/verify/32562023143028912'
            const res =  await axios.get(url,{
            headers: {
              Authorization: `Bearer ${"CHASECK_TEST-TIQS836F9jgZaybMMPs2TFybGeVOqSb3"}`,
              'Content-Type': 'application/json',
            },
          });
          console.log(res.data);
          }
          catch(error){
            
          }
        }
        verify();
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default VerifyPayment

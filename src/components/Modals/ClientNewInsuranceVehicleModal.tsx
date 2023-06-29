import React, {useState, useEffect} from 'react'
import { Descriptions, Badge, Form, InputNumber, Button } from 'antd'
import { useDispatch } from 'react-redux';
import { add_reference } from '../../redux/Actions';
import { getCookie, setCookie } from 'typescript-cookie'


const ClientNewInsuranceVehicleModal = ({data}:any) => {
    const dispatch = useDispatch()
    const [reference, setReference] = useState("");
    const [transactionReference, setTransactionReference] = useState<string>();
    const contract_price = data.contract_price;
    const onFinish = async (values: any) => {
        console.log('Success:', values);
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

      useEffect(() => {
        setReference(Date().toString());
        console.log(data);
        let date = new Date();
        let forRef = `${date.getDate()}${date.getMonth() + 1}${date.getFullYear()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`;
        let transactionReferences = data.proposer.toString() + "" +  forRef;
        console.log(transactionReferences)
        dispatch(add_reference(transactionReferences))
        setTransactionReference(transactionReferences);
        setCookie("reference", transactionReferences,{ expires: 1/144 })
        setCookie("vehicleid", data.id,{ expires: 1/144 })
      }, [])
  return (
    <div className=' h-[32rem] scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
        <Descriptions bordered>
            {/* <Descriptions.Item label="Engine Number" span={3}>12345</Descriptions.Item>
            <Descriptions.Item label="Chassis Number" span={3}>12345</Descriptions.Item>
            <Descriptions.Item label="Plate Number" span={2}>3-AA-B12456</Descriptions.Item>
            <Descriptions.Item label="Body Type">Silver</Descriptions.Item>
            <Descriptions.Item label="Horse Power" span={2}>1200</Descriptions.Item>
            <Descriptions.Item label="Cylinder Capacity" span={2}><Badge status="processing" text="5" /></Descriptions.Item>
            <Descriptions.Item label="Manufacture year" span={2}>2005</Descriptions.Item>
            <Descriptions.Item label="Goods Carry" span={3}>6 Ton</Descriptions.Item>
            <Descriptions.Item label="Passangers Carry" span={2}>5</Descriptions.Item>
            <Descriptions.Item label="Current Estimation">12000000</Descriptions.Item>
            <Descriptions.Item label="Vehicle Owner" span={2}>Jhon Doe</Descriptions.Item>
            <Descriptions.Item label="Purpose of vehicle">Learning</Descriptions.Item>
            <Descriptions.Item label="Insure Vehicle from Bandit, Shifta and Guerrilla" span={2}>Yes</Descriptions.Item>
            <Descriptions.Item label="Proposer Name">Jhon Doe</Descriptions.Item>
            <Descriptions.Item label="Cover Required" span={2}>Third Party</Descriptions.Item>
            <Descriptions.Item label="Drivers Covered">Any Driver</Descriptions.Item>
            <Descriptions.Item label="Extra Fitting" span={3}>
                Radio: 2500 Birr
                <br />
                Communication Equipment: 3200 Birr
                <br />
                BCD: 6550 Birr
                <br />
            </Descriptions.Item>
            <Descriptions.Item label="Other Insurances" span={3}>
                Decline your proposal: Yes
                <br />
                Refused to renew your policy: No
                <br />
                Cancelled your policy:Yes
                <br />
                Requrie an increase of premium: No
                <br />
                Imposed additional excess: Yes
                <br />
                Imposed special conditions: No
                <br />
            </Descriptions.Item> */}
            <Descriptions.Item label="Estimated Insurance Price">45,879 birr</Descriptions.Item>
        </Descriptions>
        <div>
        <form method="POST" action="https://api.chapa.co/v1/hosted/pay" >
            <input type="hidden" name="public_key" value="CHAPUBK_TEST-Ot6L5hmDhbSwv6hpST593wonzQ5LABFQ" />
            <input type="hidden" name="tx_ref" value={transactionReference} />
            <input type="hidden" name="amount" value={contract_price} />
            <input type="hidden" name="currency" value="ETB" />
            <input type="hidden" name="email" value="antenehsolomon35@gmail.com" />
            <input type="hidden" name="first_name" value="Israel" />
            <input type="hidden" name="last_name" value="Goytom" />
            <input type="hidden" name="title" value="Let us do this" />
            <input type="hidden" name="description" value="Paying with Confidence with cha" />
            <input 
                type="hidden" 
                name="logo" 
                value="https://chapa.link/asset/images/chapa_swirl.svg" />
            <input 
                type="hidden" 
                name="callback_url" 
                value="https://example.com/callbackurl" />
            <input 
                type="hidden" 
                name="return_url" 
                value="https://automatedinsurance.blackneb.com/#/verifypayment" />
            <input 
                type="hidden" 
                name="meta[title]" 
                value="test" />
            
            <div className='flex flex-row justify-center my-4'>
                <Button style={{ margin: '0 8px' }} type="default" htmlType="submit">
                     Accept Contract
                </Button>

                <Button style={{ margin: '0 8px' }} type="default" >
                     Decline Contract
                </Button>
            </div>
            
        </form>
        </div>
    </div>
  )
}

export default ClientNewInsuranceVehicleModal

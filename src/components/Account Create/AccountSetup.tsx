import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, Upload, notification} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { add_account_set_up } from '../../redux/Actions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AccountSetup = ({prev,setCreateAccountReterive}:any) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const basicinformation = useSelector((state:any) => state.basicInformation);
  const address = useSelector((state:any) => state.address);
  const accountSetupDefaultValues = useSelector((state:any) => state.accountSetup);
  const formData = new FormData();
  const onFinish = async (values: any) => {
    setLoading(true)
    console.log('Success:', values);
    dispatch(add_account_set_up(values));
    formData.delete('image');
        formData.append("image", values.profileImage.file);
    axios.post( "https://blackneb.com/images/Upload_file.php", formData).then(res => {
        console.log(res.data);
        if(res.data.status === "success"){
          const jsonArray = {
            f_name:basicinformation.firstName,
            l_name:basicinformation.lastName,
            username:values.userName,
            password:values.password,
            p_image:res.data.name,
            res_subcity:address.residentialSubCity,
            res_woreda:address.residentialWoreda,
            res_kebele:address.residentialKeble,
            res_house_number:address.residentialHouseNumber,
            res_p_o_box:address.residentialPOBox,
            res_phone:address.residentialPhone,
            res_email:address.residentialEmail,
            bus_subcity:address.bussinessSubCity,
            bus_woreda:address.bussinessWoreda,
            bus_kebele:address.bussinessKebele,
            bus_house_number:address.bussinessHouseNumber,
            bus_p_o_box:address.bussinessPOBox,
            bus_phone:address.bussinessPhone,
            bus_email:address.bussinessEmail,
            bus_fax:address.bussinessFax
          }
          console.log(JSON.stringify(jsonArray,null,2));
            axios.post("https://ais.blackneb.com/api/ais/createproposeraccount", jsonArray).then(response => {
                if(response.data[0].status === "created"){
                  notification.success({
                    message: 'success',
                    description: 'Account Created Successfully',
                  });
                  setLoading(false);
                }
                else{
                  notification.error({
                    message: 'Error',
                    description: 'Please Try Again',
                  });
                  setLoading(false);
                }
            })
          console.log("posting info...")
        }
        else{
          notification.error({
            message: 'Error',
            description: 'Please Try Again',
          });
          setLoading(false);
            console.log("Item Upload Failed");
        }
    })
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <div className='flex justify-center my-4'>
       <Form
        name="basic"
        labelCol={{ span: 30 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={accountSetupDefaultValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className='flex flex-col h-[32rem]'>
          <Form.Item
            label="Username"
            name="userName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item 
            label="Profile Image" 
            name="profileImage"
            rules={[{ required: true, message: 'Please input your Profile Image!' }]}>
            <Upload listType="picture-card" beforeUpload={(file:any) =>{
              return new Promise((resolve:any,reject:any) => {
                if(file.size > 2){
                  reject("File size exceed");
                }
                else{
                  resolve("Success");
                }
              })
            }} >
              <div className=''>
                <PlusOutlined/>
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>

        </div>
        <div className='flex flex-row justify-center'>
          <Button style={{ margin: '0 8px' }} type="default" htmlType="submit">
          {loading ? 'Creating Account...' : 'Done'}
          </Button>
          <Button style={{ margin: '0 8px' }} type="default" onClick={() => prev()}>
            Prev
          </Button>
          <Button style={{ margin: '0 8px' }} onClick={() => { setCreateAccountReterive(false) }}>
            Back to Login
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default AccountSetup

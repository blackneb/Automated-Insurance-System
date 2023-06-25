import React, { useEffect } from 'react'
import { Descriptions, Badge } from 'antd'
import { useSelector } from 'react-redux';

const VehiclesModal = ({data}:any) => {
  const vehicleInformation = useSelector((state:any) => state.vehicles.totalVehicles);
    const vehicleInfo = vehicleInformation.filter((items:any) =>  items.vehicles.id === data.id);
  return (
        <div className=' h-[32rem] scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
        <Descriptions bordered>
            <Descriptions.Item label="Engine Number" span={3}>{data.engine_number}</Descriptions.Item>
            <Descriptions.Item label="Chassis Number" span={3}>{data.chassis_number}</Descriptions.Item>
            <Descriptions.Item label="Plate Number" span={2}>{vehicleInfo[0].plate[0].code + " " + vehicleInfo[0].plate[0].city + " " + vehicleInfo[0].plate[0].number }</Descriptions.Item>
            <Descriptions.Item label="Body Type">{data.body_type}</Descriptions.Item>
            <Descriptions.Item label="Horse Power" span={2}>{data.cylindercapacity}</Descriptions.Item>
            <Descriptions.Item label="Cylinder Capacity" span={2}><Badge status="processing" text="5" /></Descriptions.Item>
            <Descriptions.Item label="Manufacture year" span={2}>{data.manufacturedyear}</Descriptions.Item>
            <Descriptions.Item label="Goods Carry" span={3}>{data.good_capacity}</Descriptions.Item>
            <Descriptions.Item label="Passangers Carry" span={2}>{data.passenger_capacity}</Descriptions.Item>
            <Descriptions.Item label="Current Estimation">{data.currentestimation}</Descriptions.Item>
            <Descriptions.Item label="Vehicle Owner" span={2}>{data.owner_f_name + " " + data.owner_f_name}</Descriptions.Item>
            <Descriptions.Item label="Purpose of vehicle">{data.purpose}</Descriptions.Item>
            <Descriptions.Item label="Insure Vehicle from Bandit, Shifta and Guerrilla" span={2}>{data.bsg_action}</Descriptions.Item>
            <Descriptions.Item label="Proposer Name">{data.proposer}</Descriptions.Item>
            <Descriptions.Item label="Cover Required" span={2}>{data.cover_required}</Descriptions.Item>
            <Descriptions.Item label="Drivers Covered">{data.drivers_covered}</Descriptions.Item>
            <Descriptions.Item label="Extra Fitting" span={3}>
                Radio: 2500 Birr
                <br />
                Communication Equipment: 3200 Birr
                <br />
                BCD: 6550 Birr
                <br />
            </Descriptions.Item>
            <Descriptions.Item label="Other Insurances" span={3}>
                Decline your proposal: {vehicleInfo[0].otherInsurances[0].decline}
                <br />
                Refused to renew your policy: {vehicleInfo[0].otherInsurances[0].refuse}
                <br />
                Cancelled your policy: {vehicleInfo[0].otherInsurances[0].cancel}
                <br />
                Requrie an increase of premium: {vehicleInfo[0].otherInsurances[0].requires}
                <br />
                Imposed additional excess: {vehicleInfo[0].otherInsurances[0].iae}
                <br />
                Imposed special conditions: {vehicleInfo[0].otherInsurances[0].isc}
                <br />
            </Descriptions.Item>
        </Descriptions>
    </div>
  )
}

export default VehiclesModal

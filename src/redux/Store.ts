import { combineReducers, createStore } from "redux";
import {composeWithDevTools} from '@redux-devtools/extension';
import { garageBidReducers, itemReducers, addReferenceReducers, addContractReducers, breadcrumbReducers, basicInformationReducers, addressReducers, accountSetupReducers, particularReducers, extraFittingReducers, otherInsuranceReducers, accidentBeforeReducers, additionalInfoReducers, dateAppointmentReducers, userTypeReducers, vehicleOnlyReducers, vehicleReducers } from "./Reducer";

const reducers = combineReducers(
    {
        breadcrumb:breadcrumbReducers,
        basicInformation:basicInformationReducers,
        address:addressReducers,
        accountSetup:accountSetupReducers,
        particular:particularReducers,
        extraFitting:extraFittingReducers,
        otherInsurance:otherInsuranceReducers,
        accidentBefore:accidentBeforeReducers,
        additionalInfo:additionalInfoReducers,
        dateAppointment:dateAppointmentReducers,
        userType:userTypeReducers,
        vehicles:vehicleReducers ,
        vehiclesOnly:vehicleOnlyReducers,
        contract:addContractReducers,
        reference:addReferenceReducers,
        items:itemReducers,
        garageBids:garageBidReducers,

    }
);

export const store = createStore(reducers, composeWithDevTools())

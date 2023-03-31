import { combineReducers, createStore } from "redux";
import {composeWithDevTools} from '@redux-devtools/extension';
import { breadcrumbReducers, basicInformationReducers, addressReducers, accountSetupReducers, particularReducers, extraFittingReducers, otherInsuranceReducers, accidentBeforeReducers, additionalInfoReducers, dateAppointmentReducers } from "./Reducer";

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
    }
);

export const store = createStore(reducers, composeWithDevTools())

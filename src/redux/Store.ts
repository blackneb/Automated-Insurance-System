import { combineReducers, createStore } from "redux";
import {composeWithDevTools} from '@redux-devtools/extension';
import { breadcrumbReducers, basicInformationReducers, addressReducers, accountSetupReducers } from "./Reducer";

const reducers = combineReducers(
    {
        breadcrumb:breadcrumbReducers,
        basicInformation:basicInformationReducers,
        address:addressReducers,
        accountSetup:accountSetupReducers,
    }
);

export const store = createStore(reducers, composeWithDevTools())

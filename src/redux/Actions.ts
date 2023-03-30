import { ADD_BREADCRUMB, ADD_BASIC_INFORMATION, ADD_ADDRESS, ADD_ACCOUNT_SET_UP } from "./ActionTypes";

export const add_breadcrumb = (breadcrumb:any) => {
    return{
        type:ADD_BREADCRUMB,
        payload:breadcrumb,
    }
};

export const add_basic_information = (basicinformation:any) => {
    return{
        type:ADD_BASIC_INFORMATION,
        payload:basicinformation,
    }
};

export const add_address = (address:any) => {
    return{
        type:ADD_ADDRESS,
        payload:address,
    }
};

export const add_account_set_up = (accountsetup:any) => {
    return{
        type:ADD_ACCOUNT_SET_UP,
        payload:accountsetup,
    }
};
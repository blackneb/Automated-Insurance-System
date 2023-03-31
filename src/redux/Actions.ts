import { ADD_BREADCRUMB, ADD_BASIC_INFORMATION, ADD_ADDRESS, ADD_ACCOUNT_SET_UP, ADD_PARTICULAR, ADD_EXTRA_FITTING, ADD_OTHER_INSURANCE, ADD_ACCIDENT_BEFORE, ADD_ADDITIONAL_INFO, ADD_DATE_APPOINTMENT, ADD_USER_TYPE } from "./ActionTypes";

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

export const add_particular = (particular:any) => {
    return{
        type:ADD_PARTICULAR,
        payload:particular,
    };
};

export const add_extra_fitting = (extrafitting:any) => {
    return{
        type:ADD_EXTRA_FITTING,
        payload:extrafitting,
    };
};

export const add_other_insurance = (otherinsurance:any) => {
    return{
        type:ADD_OTHER_INSURANCE,
        payload:otherinsurance,
    };
};

export const add_accident_before = (accidentbefore:any) => {
    return{
        type:ADD_ACCIDENT_BEFORE,
        payload:accidentbefore,
    };
};

export const add_additional_info = (additionalinfo:any) => {
    return{
        type:ADD_ADDITIONAL_INFO,
        payload:additionalinfo,
    };
};

export const add_date_appointment = (dateappointment:any) => {
    return{
        type:ADD_DATE_APPOINTMENT,
        payload:dateappointment,
    };
};

export const add_user_type=(usertype:any)=>{
    return{
        type:ADD_USER_TYPE,
        payload:usertype,
    };
};
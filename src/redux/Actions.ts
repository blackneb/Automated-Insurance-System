import { ADD_CONTRACT, ADD_ITEMS, CLEAR_ITEMS, ADD_REFERENCE, ADD_BREADCRUMB, ADD_BASIC_INFORMATION, ADD_ADDRESS, ADD_ACCOUNT_SET_UP, ADD_PARTICULAR, ADD_EXTRA_FITTING, ADD_OTHER_INSURANCE, ADD_ACCIDENT_BEFORE, ADD_ADDITIONAL_INFO, ADD_DATE_APPOINTMENT, ADD_USER_TYPE, VEHICLES, VEHICLES_ONLY, CLEAR_VEHICLES,CLEAR_VEHICLES_ONLY } from "./ActionTypes";

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

export const add_vehicles = (accident:any) => {
    return{
        type:VEHICLES,
        payload:accident
    }
}

export const clear_vehicles = (clear_accident:any) => {
    return{
        type:CLEAR_VEHICLES,
        payload:clear_accident
    }
}

export const clear_vehicles_only = (clear_accident_only:any) => {
    return{
        type:CLEAR_VEHICLES_ONLY,
        payload:clear_accident_only
    }
}

export const only_vehicles = (only:any) => {
    return{
        type:VEHICLES_ONLY,
        payload:only
    }
}

export const add_contract = (contract:any) => {
    return{
        type:ADD_CONTRACT,
        payload:contract
    }
}

export const add_items = (item:any) => {
    return{
        type:ADD_ITEMS,
        payload:item
    }
}

export const clear_items = (item:any) => {
    return{
        type:CLEAR_ITEMS,
        payload:item
    }
}


export const add_reference = (refer:any) => {
    return{
        type:ADD_REFERENCE,
        payload:refer
    }
}
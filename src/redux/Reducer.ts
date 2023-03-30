import { ADD_BREADCRUMB, ADD_BASIC_INFORMATION, ADD_ADDRESS, ADD_ACCOUNT_SET_UP } from "./ActionTypes";

const initialStateBreadCrumb:any[] = [
    {title:"Home",path:"/"},
];
const initialStateBasicInformation:any={
    firstName:"",
    lastName:"",
}
const initialStateAddress:any={
    residentialSubCity:"",
    residentialWoreda:"",
    residentialKebele:"",
    residentialHouseNumber:"",
    residentialPOBox:"",
    residentialPhone:"",
    residentialEmail:"",
    bussinessSubCity:"",
    bussinessWoreda:"",
    bussinessKebele:"",
    bussinessHouseNumber:"",
    bussinessPOBox:"",
    bussinessPhone:"",
    bussinessEmail:"",
    bussinessFax:"",
};
const initialStateAccountSetup:any={
    userName:"",
    password:"",
};

export const breadcrumbReducers = ( state=initialStateBreadCrumb, action:any ) => {
    const { type,payload } = action;
    switch(type){
        case ADD_BREADCRUMB:
            return payload;
        default:
            return state;
    };
};

export const basicInformationReducers = (state=initialStateBasicInformation, action:any) => {
    const { type, payload } = action;
    switch(type){
        case ADD_BASIC_INFORMATION:
            return payload;
        default:
            return state;
    };
};

export const addressReducers = (state=initialStateAddress, action:any) => {
    const { type, payload } = action;
    switch(type){
        case ADD_ADDRESS:
            return payload;
        default:
            return state;
    };
};

export const accountSetupReducers = (state=initialStateAccountSetup, action:any) => {
    const { type, payload } = action;
    switch(type){
        case ADD_ACCOUNT_SET_UP:
            return payload;
        default:
            return state;
    }
}

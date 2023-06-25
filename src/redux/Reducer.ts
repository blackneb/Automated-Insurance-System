import { ADD_BREADCRUMB, ADD_BASIC_INFORMATION, ADD_ADDRESS, ADD_ACCOUNT_SET_UP, ADD_PARTICULAR, ADD_EXTRA_FITTING, ADD_ACCIDENT_BEFORE, ADD_OTHER_INSURANCE,ADD_ADDITIONAL_INFO,ADD_DATE_APPOINTMENT, ADD_USER_TYPE } from "./ActionTypes";

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
    profileImage:"",
};
const initialStateParticular:any={
    plateCode:"",
    plateCountry:"",
    plateNumber:"",
    chassisNumber:"",
    engineNumber:"",
    model:"",
    bodyType:"",
    horsePower:"",
    cylinderCapacity:"",
    manufactureYear:"",
    goodsCarry:"",
    passengersCarry:"",
    currentEstimation:"",
};
const initialStateExtraFitting:any={
    radio:"",
    communication:"",
    BCD:"",
};
const initialStateAccidentBefore = {
    previousAccident:[],
}
const initialStateOtherInsurance:any={
    decline:"",
    refuse:"",
    cancel:"",
    require:"",
    iae:"",
    isc:"",
};
const initialStateAdditionalInfo:any={
    coverRequired:"",
    driversCovered:"",
    firstName:"",
    lastName:"",
    vehiclePurpose:"",
    BSG:"",
};
const initialStateDateAppointment:any={
    appointmentDate:"",
};

const initialStateUserType:any={
}
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
    };
};

export const particularReducers = (state=initialStateParticular,action:any) => {
    const { type, payload } = action;
    switch(type){
        case ADD_PARTICULAR:
            return payload;
        default:
            return state;
    };
};

export const extraFittingReducers = (state=initialStateExtraFitting, action:any) =>{
    const { type, payload } = action;
    switch(type){
        case ADD_EXTRA_FITTING:
            return payload;
        default:
            return state;
    };
};

export const accidentBeforeReducers = (state=initialStateAccidentBefore, action:any) => {
    const { type, payload } = action;
    switch(type){
        case ADD_ACCIDENT_BEFORE:
            return {...state,previousAccident:[...state.previousAccident,payload]}
        default:
            return state;
    };
};

export const otherInsuranceReducers = (state=initialStateOtherInsurance, action:any) => {
    const { type, payload } = action;
    switch(type){
        case ADD_OTHER_INSURANCE:
            return payload;
        default:
            return state;
    };
};

export const additionalInfoReducers = (state=initialStateAdditionalInfo, action:any) => {
    const { type, payload } = action;
    switch(type){
        case ADD_ADDITIONAL_INFO:
            return payload;
        default:
            return state;
    };
};

export const dateAppointmentReducers = (state=initialStateDateAppointment,action:any) => {
    const { type, payload } = action;
    switch(type){
        case ADD_DATE_APPOINTMENT:
            return payload;
        default:
            return state;
    };
};

export const userTypeReducers = (state=initialStateUserType, action:any)=>{
    const { type, payload } = action;
    switch(type){
        case ADD_USER_TYPE:
            return payload;
        default:
            return state;
    }
}
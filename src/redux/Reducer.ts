import {ADD_GARAGE_BIDS,CLEAR_GARAGE_BIDS,ADD_ITEMS, CLEAR_ITEMS,ADD_CONTRACT,ADD_REFERENCE, ADD_BREADCRUMB, ADD_BASIC_INFORMATION, ADD_ADDRESS, ADD_ACCOUNT_SET_UP, ADD_PARTICULAR, ADD_EXTRA_FITTING, ADD_ACCIDENT_BEFORE, ADD_OTHER_INSURANCE,ADD_ADDITIONAL_INFO,ADD_DATE_APPOINTMENT, ADD_USER_TYPE, VEHICLES, VEHICLES_ONLY, CLEAR_VEHICLES, CLEAR_VEHICLES_ONLY } from "./ActionTypes";

const initialStateBreadCrumb:any[] = [
    {title:"Home",path:"/"},
];
const initialStateContract:any[]=[];
const initialStateReference ={};
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
const initialStateAddItems = {
    items:[],
}
const initialStateGarageBids = {
    garageBids:[],
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

const initialStateVehicles = {
    totalVehicles:[],
}
const initialStateVehiclesOnly = {
    Vehicles:[],
}

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

export const vehicleReducers = (state=initialStateVehicles, action:any)=>{
    const { type, payload } = action;
    switch(type){
        case VEHICLES:
            return {...state,totalVehicles:[...state.totalVehicles,payload]}
        case CLEAR_VEHICLES:
            return initialStateVehicles;
        default:
            return state;
    };
};

export const itemReducers = (state=initialStateAddItems, action:any)=>{
    const { type, payload } = action;
    switch(type){
        case ADD_ITEMS:
            return {...state,items:[...state.items,payload]}
        case CLEAR_ITEMS:
            return initialStateAddItems;
        default:
            return state;
    };
};


export const garageBidReducers = (state=initialStateGarageBids, action:any)=>{
    const { type, payload } = action;
    switch(type){
        case ADD_GARAGE_BIDS:
            return {...state,garageBids:[...state.garageBids,payload]}
        case CLEAR_GARAGE_BIDS:
            return initialStateAddItems;
        default:
            return state;
    };
};

export const vehicleOnlyReducers = (state=initialStateVehiclesOnly, action:any)=>{
    const { type, payload } = action;
    switch(type){
        case VEHICLES_ONLY:
            return {...state,Vehicles:[...state.Vehicles,payload]}
            case CLEAR_VEHICLES_ONLY:
                return initialStateVehiclesOnly;
        default:
            return state;
    };
};

export const addContractReducers = (state=initialStateContract, action:any) => {
    const { type, payload } = action;
    switch(type){
        case ADD_CONTRACT:
            return payload;
        default:
            return state;
    }
}

export const addReferenceReducers = (state=initialStateReference, action:any) => {
    const { type, payload } = action;
    switch(type){
        case ADD_REFERENCE:
            return payload;
        default:
            return state;
    }
}
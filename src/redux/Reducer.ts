import { ADD_BREADCRUMB } from "./ActionTypes";

const initialStateBreadCrumb:any[] = [
    {tilte:"home",path:"/"},
];

export const breadcrumbReducers = ( state=initialStateBreadCrumb, action:any ) => {
    const { type,payload } = action;
    switch(type){
        case ADD_BREADCRUMB:
            return[payload];
        default:
            return state;

    }
}
import { ADD_BREADCRUMB } from "./ActionTypes";

export const add_breadcrumb = (breadcrumb:any) => {
    return{
        type:ADD_BREADCRUMB,
        PAYLOAD:breadcrumb,
    }
};
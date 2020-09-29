import {ListApi} from "../Api/GetIpi";

let inititalstate = {
    AllItems:[],
    Fatching:false,
    totalUsersCount:0,
    currentPage:1,
    AllItemsSHow:[]

}
const ListReducer = (state = inititalstate, action) => {
    switch (action.type) {
        case "setItem": {
            return {
                ...state,
                AllItems: action.Items
            }
        }
        case "setItemShow": {
            return {
                ...state,
                AllItemsSHow: action.Items
            }
        }

        case "TOGGLE_FATCHING": {
            return {
                ...state,
                Fatching: action.isFatch
            }
        }
        case "SET_CURRENT_PAGES": {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case "SET_COUNT": {
            return {
                ...state,
                totalUsersCount: action.setcount
            }
        }
        default:
            return state;
    }
}
export default ListReducer;

export const actions={
     setItem: (Items) => ({type: "setItem", Items}),
     setItemSHow: (Items) => ({type: "setItemShow", Items}),
    toggleFatch : (isFatch) => ({type: "TOGGLE_FATCHING", isFatch}),
    setTotalCount: (currentPage) => ({type: "SET_CURRENT_PAGES", currentPage} ),
}
export const GetList = (page) => {

    return async (dispatch) => {
        dispatch(actions.toggleFatch(true));   // twister
        let data = await ListApi.GetList(page);       //gating data portion
        dispatch(actions.toggleFatch(false));
        dispatch(actions.setItem(data))               //set data
        dispatch(actions.setTotalCount(page));

    }
}
export const GetListAll = (page) => {
    return async (dispatch) => {
        let data = await ListApi.GetListAll(); //gating All List and set
        dispatch(actions.setItemSHow(data))
    }
}




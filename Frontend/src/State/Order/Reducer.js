import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, GET_ORDER_HISTORY_REQUEST, GET_ORDER_HISTORY_SUCCESS, GET_ORDER_HISTORY_FAILURE } from "./ActionType"



const initialState = {
    orders:[],
    order:null,
    error:null,
    loading:false,
}



export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {...state,error:null,loading:true}
        case CREATE_ORDER_SUCCESS:
            return {...state,error:null,loading:false,order:action.payload}
        case CREATE_ORDER_FAILURE:
            return {...state,loading:false,error:action.payload}
        case GET_ORDER_BY_ID_REQUEST:
            return {...state,error:null,loading:true}
        case GET_ORDER_BY_ID_SUCCESS:
            return {...state,error:null,loading:false,order:action.payload}
        case GET_ORDER_BY_ID_FAILURE:
            return {...state,error:action.payload,loading:false}
        case GET_ORDER_HISTORY_REQUEST:
            return {...state, error: null, loading: true};
        case GET_ORDER_HISTORY_SUCCESS:
            return {...state, error: null, loading: false, orders: action.payload};
        case GET_ORDER_HISTORY_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state
    }
}


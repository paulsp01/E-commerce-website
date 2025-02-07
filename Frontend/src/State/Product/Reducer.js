import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "./ActionType"

const initialState={
    products: { content: [] },
    product:null,
    loading:false,
    error:null
}

export const customerProductReducer=(state=initialState,action)=>{
    switch(action.type){
        case FIND_PRODUCT_BY_ID_REQUEST:
        case FIND_PRODUCT_REQUEST:
        case CREATE_PRODUCT_REQUEST:
        case DELETE_PRODUCT_REQUEST:
        case UPDATE_PRODUCT_REQUEST:
            return {...state,loading:true,error:null}

        case FIND_PRODUCT_SUCCESS:
            return {...state,loading:false,error:null,products:action.payload}
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return { ...state,loading:false,error:null,product:action.payload}
        case CREATE_PRODUCT_SUCCESS:
           return { ...state, loading: false, error: null, products: { ...state.products, content: [...state.products.content, action.payload] } }
        case UPDATE_PRODUCT_SUCCESS:
            return {
            ...state,
            loading: false,
            error: null,
            products: {
                ...state.products,
                content: state.products.content.map(product =>
                product._id === action.payload._id ? action.payload : product
                )
            }
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
            ...state,
            loading: false,
            error: null,
            products: {
                ...state.products,
                content: state.products.content.filter(product => product._id !== action.payload)
            }
            }
        case FIND_PRODUCT_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
        case CREATE_PRODUCT_FAILURE:
        case UPDATE_PRODUCT_FAILURE:
        case DELETE_PRODUCT_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }

}
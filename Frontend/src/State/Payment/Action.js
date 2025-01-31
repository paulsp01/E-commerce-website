import { api } from "../../config/ApiConfig"
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./ActionType"



export const createPayment=(orderId)=>async (dispatch)=>{
    dispatch({ type:CREATE_PAYMENT_REQUEST })
    try {
        const {data}=await api.post(`/payment/${orderId}`,{})
      
        if(data.payment_link_url){
            window.location.href=data.payment_link_url
        }
        dispatch({ type:CREATE_PAYMENT_SUCCESS,})
    } catch (error) {
        dispatch({type:CREATE_PAYMENT_FAILURE,payload:error.message})
    }
}


export const updatePaymentInfo=(reqData)=>async (dispatch)=>{
  
    dispatch({ type:UPDATE_PAYMENT_REQUEST })
    try {
        const {data}=await api.get(`/payment?payment_id=${reqData.payment_id}&order_id=${reqData.order_id}`,{})

      
        dispatch({ type:UPDATE_PAYMENT_SUCCESS ,payload:data} )
        console.log("update payment success",data)
    } catch (error) {
        dispatch({type:UPDATE_PAYMENT_FAILURE,payload:error.message})
    }
}
import { api } from "../../../config/ApiConfig";
import { CANCEL_ORDER_FAILURE, CANCEL_ORDER_REQUEST, CANCEL_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, PLACED_ORDER_FAILURE, PLACED_ORDER_REQUEST, PLACED_ORDER_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType";

export const getOrders = () => async (dispatch) => {
   
    dispatch({ type: GET_ORDERS_REQUEST });
    try {
        const { data } = await api.get(`admin/order`);
       
        dispatch({ type: GET_ORDERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ORDERS_FAILURE, payload: error.message });
    }
}

export const confirmOrder = (orderId) => async (dispatch) => {
    dispatch({ type: CONFIRMED_ORDER_REQUEST });
    try {
        const { data } = await api.put(`admin/order/${orderId}/confirmed`);
       
        dispatch({ type: CONFIRMED_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CONFIRMED_ORDER_FAILURE, payload: error.message });
    }
}

export const placedOrder = (orderId) => async (dispatch) => {
    dispatch({ type: PLACED_ORDER_REQUEST });
    try {
        const { data } = await api.put(`admin/order/${orderId}/placed`);
      
        dispatch({ type: PLACED_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PLACED_ORDER_FAILURE, payload: error.message });
    }
}

export const shipOrder = (orderId) => async (dispatch) => {
    dispatch({ type: SHIP_ORDER_REQUEST });
    try {
        const { data } = await api.put(`admin/order/${orderId}/ship`);
      
        dispatch({ type: SHIP_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: SHIP_ORDER_FAILURE, payload: error.message });
    }
}

export const deliverOrder = (orderId) => async (dispatch) => {
    dispatch({ type: DELIVERED_ORDER_REQUEST });
    try {
        const { data } = await api.put(`admin/order/${orderId}/deliver`);
       
        dispatch({ type: DELIVERED_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DELIVERED_ORDER_FAILURE, payload: error.message });
    }
}

export const cancelOrder = (orderId) => async (dispatch) => {
    dispatch({ type: CANCEL_ORDER_REQUEST });
    try {
        const { data } = await api.put(`admin/order/${orderId}/cancel`);
      
        dispatch({ type: CANCEL_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CANCEL_ORDER_FAILURE, payload: error.message });
    }
}

export const deleteOrder = (orderId) => async (dispatch) => {
    dispatch({ type: DELETE_ORDER_REQUEST });
    try {
        const { data } = await api.delete(`admin/order/${orderId}/delete`);
    
        dispatch({ type: DELETE_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message });
    }
}
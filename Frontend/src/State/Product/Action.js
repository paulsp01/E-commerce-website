import { api } from "../../config/ApiConfig";
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_REQUEST });
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqData;
  try {
   
    const { data } =await api.get(
      `/product?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&sort=${sort}&stock=${stock}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
  
    dispatch({type:FIND_PRODUCT_SUCCESS,payload: data});
  } catch (error) {
    console.error("Error fetching products:", error);
    dispatch({type:FIND_PRODUCT_FAILURE,payload:error.message})
  }
};


export const findProductsById = (reqData) => async (dispatch) => {
 
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
    
  
    try {
      const { data } =await api.get(
        `/product/id/${reqData}`
      );
   
      dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload: data});
    } catch (error) {
      dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }
  };


  export const addProduct=(product)=>async (dispatch)=>{
    dispatch({type:CREATE_PRODUCT_REQUEST})

    try {
      
      const { data } = await api.post(`/admin/product`,product)
     
      dispatch({type:CREATE_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
      dispatch({type:CREATE_PRODUCT_FAILURE,payload: error.message})
    }

  }


  export const deleteProduct=(productId)=>async (dispatch)=>{
    dispatch({type:DELETE_PRODUCT_REQUEST})
   
    try {
      
      const { data } = await api.delete(`/admin/product/${productId}`)
      dispatch({type:DELETE_PRODUCT_SUCCESS,payload:productId})
    } catch (error) {
      dispatch({type:DELETE_PRODUCT_FAILURE,payload: error.message})
    }

  }


  export const updateProduct = (productId, productData) => async (dispatch) => {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });

    try {
      const { data } = await api.put(`/admin/product/${productId}`, productData);
      dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: error.message });
    }
  };
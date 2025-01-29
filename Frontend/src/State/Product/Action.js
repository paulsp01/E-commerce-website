import { api } from "../../config/ApiConfig";
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType";

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
    const {productId} = reqData;
  
    try {
      const { data } =await api.get(
        `/product/id/${reqData}`
      );
    
      dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload: data});
    } catch (error) {
      dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }
  };
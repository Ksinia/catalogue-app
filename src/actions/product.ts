import { MyThunkAction, Product } from "../types";
import { AnyAction } from "redux";
import { productApiUrl } from "../apiUrls";

export const fetchProduct =
  (productId: string): MyThunkAction =>
  async (dispatch) => {
    try {
      const response = await fetch(`${productApiUrl}/product/${productId}`);
      const body = await response.json();
      const action = productFetched(body);
      dispatch(action);
    } catch (error) {
      console.error("error:", error);
    }
  };

export const PRODUCT_FETCHED = "PRODUCT_FETCHED";

export const productFetched = (product: Product): AnyAction => {
  return {
    type: PRODUCT_FETCHED,
    payload: product,
  };
};

export const fetchProducts = (): MyThunkAction => async (dispatch) => {
  try {
    const response = await fetch(`${productApiUrl}/product/`);
    const body = await response.json();
    const action = productsFetched(body);
    dispatch(action);
  } catch (error) {
    console.error("error:", error);
  }
};

export const PRODUCTS_FETCHED = "PRODUCTS_FETCHED";

export const productsFetched = (products: Product[]): AnyAction => {
  return {
    type: PRODUCTS_FETCHED,
    payload: products,
  };
};

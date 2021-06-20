import { MyThunkAction, Product } from "../types";
import { AnyAction } from "redux";
import { productApiUrl } from "../apiUrls";
import { productsServerError } from "./error";

export const fetchProduct =
  (productId: string): MyThunkAction =>
  async (dispatch) => {
    try {
      const response = await fetch(`${productApiUrl}/product/${productId}`);
      if (response.ok) {
        const body = await response.json();
        const action = productFetched(body);
        dispatch(action);
      } else {
        dispatch(productsServerError());
        console.error(await response.text());
      }
    } catch (error) {
      dispatch(productsServerError());
      console.error(error);
    }
  };

export const PRODUCT_FETCHED = "PRODUCT_FETCHED";

const productFetched = (product: Product): AnyAction => {
  return {
    type: PRODUCT_FETCHED,
    payload: product,
  };
};

export const fetchProducts = (): MyThunkAction => async (dispatch) => {
  try {
    const response = await fetch(`${productApiUrl}/product/`);
    if (response.ok) {
      const body = await response.json();
      const action = productsFetched(body);
      dispatch(action);
    } else {
      dispatch(productsServerError());
      console.error(await response.text());
    }
  } catch (error) {
    dispatch(productsServerError());
    console.error(error);
  }
};

export const PRODUCTS_FETCHED = "PRODUCTS_FETCHED";

const productsFetched = (products: Product[]): AnyAction => {
  return {
    type: PRODUCTS_FETCHED,
    payload: products,
  };
};

export const CLEAR_PRODUCT = "CLEAR_PRODUCT";

export const clearProduct = () => {
  return { type: CLEAR_PRODUCT };
};

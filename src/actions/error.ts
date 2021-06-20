import { AnyAction } from "redux";

const errorMessage = "Error communicating with the server";

export const PRODUCTS_ERROR = "PRODUCTS_ERROR";

export const productsServerError = (): AnyAction => {
  return {
    type: PRODUCTS_ERROR,
    payload: errorMessage,
  };
};

export const REVIEWS_ERROR = "REVIEWS_ERROR";

export const reviewsServerError = (): AnyAction => {
  return {
    type: REVIEWS_ERROR,
    payload: errorMessage,
  };
};

export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};

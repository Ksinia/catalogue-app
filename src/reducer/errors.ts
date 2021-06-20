import { AnyAction } from "redux";

import { PRODUCTS_ERROR, REVIEWS_ERROR, CLEAR_ERRORS } from "../actions/error";
import { ErrorsObject } from "../types";

const initialState: ErrorsObject = { productsError: "", reviewsError: "" };

export default function reducer(
  state: ErrorsObject = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case PRODUCTS_ERROR:
      return { ...state, productsError: action.payload };
    case REVIEWS_ERROR:
      return { ...state, reviewsError: action.payload };
    case CLEAR_ERRORS:
      return initialState;
    default:
      return state;
  }
}

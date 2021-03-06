import { AnyAction } from "redux";

import { Product } from "../types";
import { PRODUCT_FETCHED, CLEAR_PRODUCT } from "../actions/product";

const initialState = null;

export default function reducer(
  state: Product | null = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case PRODUCT_FETCHED:
      return action.payload;
    case CLEAR_PRODUCT:
      return initialState;
    default:
      return state;
  }
}

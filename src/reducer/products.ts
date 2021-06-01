import { AnyAction } from "redux";

import { Product } from "../types";
import { PRODUCTS_FETCHED } from "../actions/product";

export default function reducer(
  state: Product | null = null,
  action: AnyAction
) {
  switch (action.type) {
    case PRODUCTS_FETCHED:
      return action.payload;
    default:
      return state;
  }
}

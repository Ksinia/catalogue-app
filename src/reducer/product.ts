import { AnyAction } from "redux";

import { Product } from "../types";
import { PRODUCT_FETCHED } from "../actions/product";

export default function reducer(
  state: Product | null = null,
  action: AnyAction
) {
  switch (action.type) {
    case PRODUCT_FETCHED:
      return action.payload;
    default:
      return state;
  }
}

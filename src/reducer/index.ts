import { combineReducers } from "redux";

import product from "./product";
import products from "./products";
import reviews from "./reviews";
import errors from "./errors";

export const rootReducer = combineReducers({
  product,
  products,
  reviews,
  errors,
});

export type RootState = ReturnType<typeof rootReducer>;

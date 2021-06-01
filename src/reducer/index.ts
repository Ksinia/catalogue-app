import { combineReducers } from "redux";

import product from "./product";
import products from "./products";
import reviews from "./reviews";

export const rootReducer = combineReducers({
  product,
  products,
  reviews,
});

export type RootState = ReturnType<typeof rootReducer>;

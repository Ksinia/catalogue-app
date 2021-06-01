import { combineReducers } from "redux";

import product from "./product";
import products from "./products";

export const rootReducer = combineReducers({
  product,
  products,
});

export type RootState = ReturnType<typeof rootReducer>;

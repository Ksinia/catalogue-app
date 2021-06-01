import { Action, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { RootState } from "./reducer";

export interface Product {
  id: string;
  name: string;
  description: string;
  currency: string;
  price: number;
  imgUrl: string;
}

export type MyThunkAction<A extends Action = AnyAction> = ThunkAction<
  void,
  RootState,
  unknown,
  A
>;

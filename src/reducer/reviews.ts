import { AnyAction } from "redux";

import { Review } from "../types";
import {
  CLEAR_REVIEWS,
  REVIEWS_FETCHED,
  REVIEW_UPLOADED,
} from "../actions/review";

const initialState: Review[] = [];

export default function reducer(
  state: Review[] = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case REVIEWS_FETCHED:
      return action.payload;
    case REVIEW_UPLOADED:
      return [...state, action.payload];
    case CLEAR_REVIEWS:
      return initialState;
    default:
      return state;
  }
}

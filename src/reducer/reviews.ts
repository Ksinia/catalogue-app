import { AnyAction } from "redux";

import { Review } from "../types";
import { CLEAR_REVIEWS, REVIEWS_FETCHED } from "../actions/review";

const initialState = null;

export default function reducer(
  state: Review | null = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case REVIEWS_FETCHED:
      return action.payload;
    case CLEAR_REVIEWS:
      return initialState;
    default:
      return state;
  }
}

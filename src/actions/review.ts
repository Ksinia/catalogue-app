import { MyThunkAction, Review } from "../types";
import { AnyAction } from "redux";
import { reviewApiUrl } from "../apiUrls";

export const fetchReviews =
  (productId: string): MyThunkAction =>
  async (dispatch) => {
    try {
      const response = await fetch(`${reviewApiUrl}/reviews/${productId}`);
      const body = await response.json();
      const action = reviewsFetched(body);
      dispatch(action);
    } catch (error) {
      console.error("error:", error);
    }
  };

export const REVIEWS_FETCHED = "REVIEWS_FETCHED";

const reviewsFetched = (reviews: Review[]): AnyAction => {
  return {
    type: REVIEWS_FETCHED,
    payload: reviews,
  };
};

export const CLEAR_REVIEWS = "CLEAR_REVIEWS";

export const clearReviews = () => {
  return { type: CLEAR_REVIEWS };
};

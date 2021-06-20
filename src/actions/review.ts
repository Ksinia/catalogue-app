import { MyThunkAction, Review } from "../types";
import { AnyAction } from "redux";
import { reviewApiUrl } from "../apiUrls";
import { reviewsServerError } from "../actions/error";

export const fetchReviews =
  (productId: string): MyThunkAction =>
  async (dispatch) => {
    try {
      const response = await fetch(`${reviewApiUrl}/reviews/${productId}`);
      if (response.ok) {
        const body = await response.json();
        const action = reviewsFetched(body);
        dispatch(action);
      } else {
        dispatch(reviewsServerError());
        console.log(await response.text());
      }
    } catch (error) {
      dispatch(reviewsServerError());
      console.error(error);
    }
  };

export const REVIEWS_FETCHED = "REVIEWS_FETCHED";

const reviewsFetched = (reviews: Review[]): AnyAction => {
  return {
    type: REVIEWS_FETCHED,
    payload: reviews,
  };
};

export const addReview =
  (review: Review): MyThunkAction =>
  async (dispatch) => {
    try {
      const response = await fetch(
        `${reviewApiUrl}/reviews/${review.productId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(review),
        }
      );
      if (response.ok) {
        const body = await response.json();
        const action = reviewUploaded(body);
        dispatch(action);
      } else {
        dispatch(reviewsServerError);
        console.error(await response.text());
      }
    } catch (error) {
      dispatch(reviewsServerError());
      console.error(error);
    }
  };

export const REVIEW_UPLOADED = "REVIEW_UPLOADED";

const reviewUploaded = (review: Review): AnyAction => {
  return {
    type: REVIEW_UPLOADED,
    payload: review,
  };
};

export const CLEAR_REVIEWS = "CLEAR_REVIEWS";

export const clearReviews = () => {
  return { type: CLEAR_REVIEWS };
};

import { Review } from "../types";
import StarRatings from "react-star-ratings";

const ReviewTile = (props: { review: Review; index: number }) => {
  const { rating, text } = props.review;
  return (
    <div className="review">
      <h3>{`Review#${props.index}`}</h3>
      <StarRatings
        rating={rating}
        starRatedColor="black"
        numberOfStars={5}
        name="rating"
        starDimension="12px"
        starSpacing="1px"
      />
      <p>{text}</p>
    </div>
  );
};

export default ReviewTile;

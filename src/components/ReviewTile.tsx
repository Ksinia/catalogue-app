import { Review } from "../types";

const ReviewTile = (props: { review: Review }) => {
  const { rating, text } = props.review;
  return (
    <div>
      <p>{rating}</p>
      <p>{text}</p>
    </div>
  );
};

export default ReviewTile;

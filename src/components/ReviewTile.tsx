import { Review } from "../types";

const ReviewTile = (props: { review: Review }) => {
  const { productId, locale, rating, text } = props.review;
  return (
    <div>
      <p>{productId}</p>
      <p> {locale} </p>
      <p>{rating}</p>
      <p>{text}</p>
    </div>
  );
};

export default ReviewTile;

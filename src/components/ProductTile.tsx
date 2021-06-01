import { Link } from "react-router-dom";

import { Product } from "../types";

export default (props: { product: Product }) => {
  const { imgUrl, price, name, currency, description, id } = props.product;
  return (
    <div>
      <Link to={`/product/${id}`}>
        <img src={imgUrl} />
        <p>{name}</p>
        <p>
          {price}
          {currency}
        </p>
        <p>{description}</p>
      </Link>
    </div>
  );
};

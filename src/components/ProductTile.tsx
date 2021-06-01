import { Link } from "react-router-dom";

import { Product } from "../types";

const ProductTile = (props: { product: Product }) => {
  const { imgUrl, price, name, currency, description, id } = props.product;
  return (
    <div className="product-tile">
      <Link to={`/product/${id}`}>
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
        <p className="price">
          {price}
          {currency}
        </p>
        <p className="description">{description}</p>
      </Link>
    </div>
  );
};

export default ProductTile;

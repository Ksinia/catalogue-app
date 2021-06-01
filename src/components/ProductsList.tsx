import { Component } from "react";
import { connect } from "react-redux";

import { fetchProducts } from "../actions/product";
import { RootState } from "../reducer";
import { AnyAction } from "redux";
import { Product } from "../types";
import { ThunkDispatch } from "redux-thunk";
import ProductTile from "./ProductTile";
import "./ProductsList.scss";

interface OwnProps {
  productsList: Product[];
}

interface DispatchProps {
  dispatch: ThunkDispatch<RootState, unknown, AnyAction>;
}

type Props = OwnProps & DispatchProps;

class ProductsList extends Component<Props> {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    if (this.props.productsList) {
      return (
        <div className="products-list">
          {this.props.productsList.map((product, i) => (
            <ProductTile key={`${product.id}-${i}`} product={product} />
          ))}
        </div>
      );
    } else {
      return "Loading...";
    }
  }
}
function MapStateToProps(state: RootState) {
  return { productsList: state.products };
}

export default connect(MapStateToProps)(ProductsList);

import { Component } from "react";
import { connect } from "react-redux";

import { fetchProduct } from "../actions/product";
import { RootState } from "../reducer";
import { AnyAction } from "redux";
import { Product } from "../types";
import { ThunkDispatch } from "redux-thunk";
import { RouteComponentProps } from "react-router-dom";

type MatchParams = { productId: string };

interface OwnProps {
  product: Product;
}

interface DispatchProps {
  dispatch: ThunkDispatch<RootState, unknown, AnyAction>;
}

type Props = OwnProps & DispatchProps & RouteComponentProps<MatchParams>;

class ProductPage extends Component<Props> {
  productId = this.props.match.params.productId;

  componentDidMount() {
    this.props.dispatch(fetchProduct(this.productId));
  }

  render() {
    if (this.props.product) {
      return (
        <div>
          <img src={this.props.product.imgUrl} />
          <p>{this.props.product.name}</p>
          <p>
            {this.props.product.price}
            {this.props.product.currency}
          </p>
          <p>{this.props.product.description}</p>
        </div>
      );
    } else {
      return "Loading...";
    }
  }
}
function MapStateToProps(state: RootState) {
  return { product: state.product };
}

export default connect(MapStateToProps)(ProductPage);

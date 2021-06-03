import { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { fetchProduct, clearProduct } from "../actions/product";
import { fetchReviews, clearReviews } from "../actions/review";
import { RootState } from "../reducer";
import { Product, Review } from "../types";
import ReviewTile from "../components/ReviewTile";
import AddReviewForm from "./AddReviewForm";
import "./ProductPage.scss";

type MatchParams = { productId: string };

interface OwnProps {
  product: Product;
  reviews: Review[];
}

interface DispatchProps {
  dispatch: ThunkDispatch<RootState, unknown, AnyAction>;
}

type Props = OwnProps & DispatchProps & RouteComponentProps<MatchParams>;

class ProductPage extends Component<Props> {
  productId = this.props.match.params.productId;

  initialState = {
    formShown: false,
  };
  state = this.initialState;

  componentDidMount() {
    this.props.dispatch(fetchProduct(this.productId));
    this.props.dispatch(fetchReviews(this.productId));
  }

  render() {
    if (this.props.product) {
      const { imgUrl, name, price, currency, description } = this.props.product;
      return (
        <div className="product-page">
          <div className="product">
            <img src={imgUrl} alt={name} />
            <div className="info">
              <h1>{name}</h1>
              <p className="price">
                {price}
                {currency}
              </p>
              <p className="description">{description}</p>
            </div>
          </div>
          <button onClick={this.showForm}>Add a review</button>
          {this.state.formShown && <AddReviewForm productId={this.productId} />}
          {this.props.reviews && this.props.reviews.length > 0 ? (
            <div className="reviews-list">
              {this.props.reviews.map((review, i) => (
                <ReviewTile key={i} review={review} index={i + 1} />
              ))}
            </div>
          ) : (
            <p>No reviews yet</p>
          )}
        </div>
      );
    } else {
      return "Loading...";
    }
  }
  componentWillUnmount() {
    this.props.dispatch(clearProduct());
    this.props.dispatch(clearReviews());
  }

  showForm = () => {
    this.setState({ formShown: !this.state.formShown });
  };
}
function MapStateToProps(state: RootState) {
  return { product: state.product, reviews: state.reviews };
}

export default connect(MapStateToProps)(ProductPage);

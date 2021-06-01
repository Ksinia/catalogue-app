import { Component } from "react";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { addReview } from "../actions/review";
import { RootState } from "../reducer";
import { Review } from "../types";

interface OwnProps {
  productId: string;
}

interface DispatchProps {
  dispatch: ThunkDispatch<RootState, unknown, AnyAction>;
}

type Props = OwnProps & DispatchProps;

class AddReviewForm extends Component<Props> {
  getLocale = () => {
    const languages =
      navigator.languages === undefined
        ? [navigator.language]
        : navigator.languages;
    return languages.join(",");
  };

  initialState: Review = {
    productId: this.props.productId,
    locale: this.getLocale(),
    rating: 5,
    text: "",
  };
  state: Review = this.initialState;

  onSubmit = async (event: React.SyntheticEvent): Promise<void> => {
    event.preventDefault();
    try {
      await this.props.dispatch(addReview(this.state));
      this.setState(this.initialState);
    } catch (error) {
      console.error(error);
    }
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="text">Your text:</label>
        <input
          onChange={this.onChange}
          value={this.state.text}
          name="text"
          id="text"
        />
        <label htmlFor="rating">Your rating:</label>
        <input
          onChange={this.onChange}
          value={this.state.rating}
          name="rating"
          id="rating"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default connect()(AddReviewForm);

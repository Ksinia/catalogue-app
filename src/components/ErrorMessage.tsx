import { Component } from "react";
import { connect } from "react-redux";

import { RootState } from "../reducer";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { clearErrors } from "../actions/error";

interface OwnProps {
  error: String;
}

interface DispatchProps {
  dispatch: ThunkDispatch<RootState, unknown, AnyAction>;
}

type Props = OwnProps & DispatchProps;

class ErrorMessage extends Component<Props> {
  componentWillUnmount() {
    this.props.dispatch(clearErrors());
  }
  render() {
    return (
      <div style={{ color: "red", padding: "1rem 0" }}>{this.props.error}</div>
    );
  }
}

export default connect()(ErrorMessage);

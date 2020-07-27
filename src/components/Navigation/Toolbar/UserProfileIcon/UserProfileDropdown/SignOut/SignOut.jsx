import React from "react";
import "./SignOut.scss";
import { connect } from "react-redux";
import * as actions from "../../../../../../store/actions/index";

const SignOut = (props) => {
  return (
    <div className="sign-out" onClick={props.onLogout}>
      SIGN OUT
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.authSignout()),
  };
};

export default connect(null, mapDispatchToProps)(SignOut);

import React from "react";
import "./SignOut.scss";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actions from "../../../../../../store/actions/index";

const SignOut = ({ onLogout }) => {
  const history = useHistory();

  const handleLogout = () => {
    onLogout(() => {
      history.push("/");
    });
  };

  return (
    <div className="sign-out" onClick={handleLogout}>
      SIGN OUT
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: (callback) => dispatch(actions.authSignout(callback)),
  };
};

export default connect(null, mapDispatchToProps)(SignOut);

import React from "react";

import { connect } from "react-redux";
import * as actions from "../../../../store/actions/user";
import "./UserProfileIcon.scss";

const UserProfileIcon = (props) => (
  <div className="profile-icon" onClick={props.toggleUserHidden}>
    <div className="username">{props.userName}</div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    userName: state.user.firstName,
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleUserHidden: () => dispatch(actions.toggleUserHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileIcon);

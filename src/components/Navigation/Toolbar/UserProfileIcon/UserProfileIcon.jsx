import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/user";

import UserProfileDropdown from "./UserProfileDropdown/UserProfileDropdown";

import "./UserProfileIcon.scss";

const UserProfileIcon = ({ getUser, userName }) => {
  const [isShown, setIsShown] = useState(false);
  const history = useHistory();

  useEffect(() => {
    getUser();
  });

  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="profile-icon">
        <div className="username" onClick={() => history.push("/account")}>
          {userName}
        </div>
      </div>

      {isShown ? <UserProfileDropdown /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userName: state.user.firstName,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // toggleUserHidden: () => dispatch(actions.toggleUserHidden()),
  getUser: () => dispatch(actions.fetchUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileIcon);

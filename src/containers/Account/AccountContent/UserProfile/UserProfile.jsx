import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./UserProfile.scss";

const UserProfile = (props) => {
  useEffect(() => {
    console.log("UserProfile rendered");
  });
  return (
    <div className="profile-container">
      <div className="user-details">
        <h3>name</h3>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <h3>email</h3>
        <p>{props.email}</p>
      </div>
      <div className="address-details"></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.LastName,
    email: state.user.email,
  };
};

export default connect(mapStateToProps)(UserProfile);

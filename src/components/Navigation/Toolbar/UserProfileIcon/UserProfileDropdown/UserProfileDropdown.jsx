import React from "react";

import "./UserProfileDropdown.scss";

const UserProfileDropdown = () => {
  return (
    <div className="user-profile-dropdown">
      <div className="user-profile-items">
        <h3>Account</h3>
        <h3>Orders</h3>
        <h3>Log out</h3>
      </div>
    </div>
  );
};

export default UserProfileDropdown;

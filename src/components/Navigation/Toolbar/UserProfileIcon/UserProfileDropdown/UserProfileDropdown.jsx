import React from "react";
import { Link } from "react-router-dom";

import Account from "../../../../../containers/Account/Account";
import SignOut from "./SignOut/SignOut";

import "./UserProfileDropdown.scss";

const UserProfileDropdown = () => {
  return (
    <div className="user-profile-dropdown">
      <ul className="user-profile-items">
        <li>
          <Link className="user-profile-dropdown-link" to="/account">
            <span>Account</span>
          </Link>
        </li>
        <li>Orders</li>
        <li>
          <SignOut />
        </li>
      </ul>
    </div>
  );
};

export default UserProfileDropdown;

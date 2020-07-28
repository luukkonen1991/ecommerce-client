import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import AccountContent from "./AccountContent/AccountContent";

import "./Account.scss";

const Account = (props) => {
  const path = props.location.pathname;
  return (
    <div className="account-content">
      <nav className="sidebar">
        <ul className="side-nav">
          <li className="side-nav__item">
            <Link className="side-nav__link" to="/account/details">
              <span>Profile</span>
            </Link>
          </li>
          <li className="side-nav__item">
            <a href="" className="side-nav__link">
              <span>Orders</span>
            </a>
          </li>
        </ul>
      </nav>

      {path === "/account" ? (
        <div className="details-view">
          <h2>Hi {props.firstName}!</h2>
          <p>Here you can view and update your profile information.</p>
        </div>
      ) : (
        <div className="details-view">
          <AccountContent path={path} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  firstName: state.user.firstName,
});

export default connect(mapStateToProps)(Account);

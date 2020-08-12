import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import AccountContent from "./AccountContent/AccountContent";
import * as actions from "../../store/actions/index";

import "./Account.scss";

const Account = (props) => {
  const path = props.location.pathname;
  const [user, setUser] = useState(props.user);

  useEffect(() => {
    console.log('[UseEffect ran in AccountComponent]', props.user);
    setUser(props.user);
  }, [props.user]);

  // console.log(props.user, '[ACCOUNT COMPONENT PROPS]');
  // console.log(user, '[ACCOUNT COMPONENT STATE]');
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
            {/*            <a href="" className="side-nav__link">
              <span>Orders</span>
  </a>*/}
          </li>
        </ul>
      </nav>

      {path === "/account" ? (
        <div className="details-view">
          {/*<h2>Hi {props.firstName}!</h2>*/}
          <h2>Hi {user.firstName}!</h2>
          <p>Here you can view and update your profile information.</p>
        </div>
      ) : (
          <div className="details-view">
            <AccountContent path={path} user={user} onUserUpdate={props.onUserUpdate} />
          </div>
        )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    onUserUpdate: (data) => dispatch(actions.updateUserInfo(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);

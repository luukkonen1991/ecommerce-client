import React from "react";

import UserProfile from "./UserProfile/UserProfile";

const AccountContent = (props) => {
  const path = props.path;
  // console.log(path, '[AccountContent]');
  if (path === "/account/details") {
    return <UserProfile user={props.user} onUserUpdate={props.onUserUpdate} />;
  }
};

export default AccountContent;

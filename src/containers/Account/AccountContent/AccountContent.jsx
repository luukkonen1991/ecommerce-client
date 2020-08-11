import React from "react";

import UserProfile from "./UserProfile/UserProfile";

const AccountContent = (props) => {
  const path = props.path;
  console.log(path, '[AccountContent]');
  if (path === "/account/details") {
    return <UserProfile />;
  }
};

export default AccountContent;

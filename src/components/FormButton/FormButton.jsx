import React from "react";

import "./FormButton.scss";

const FormButton = ({ children, label, ...otherProps }) => (
  <button className={"form-button" + ` ${label}`} {...otherProps}>
    {children}
  </button>
);

export default FormButton;

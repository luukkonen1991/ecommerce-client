import React from "react";

import "./FormButton.scss";

const FormButton = ({ children, ...otherProps }) => (
  <button
    className="form-button"
    {...otherProps}>
    {children}
  </button>
);

export default FormButton;

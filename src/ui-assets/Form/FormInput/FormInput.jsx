import React from "react";

import "./FormInput.scss";

const FormInput = ({ input, label, ...otherProps }) => {
  return (
    <div className="input-container">
      <input className="form-input" {...otherProps} {...input} />
      {label ? (
        <label
          className={`${
            input.value.length > 0 ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;

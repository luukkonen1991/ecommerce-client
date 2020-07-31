import React from "react";

import "./FormInput.scss";

const FormInput = ({ handleChange, label, formtype, ...otherProps }) => {
  return (
    <div className="input-container">
      <input
        className={`form-input ${formtype}`}
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length > 0 ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;

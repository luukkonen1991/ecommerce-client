import React, { Component } from "react";
import { Link } from "react-router-dom";

import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../redux/auth/auth.actions";

import FormInput from "../../ui-assets/Form/FormInput/FormInput";
import FormButton from "../../ui-assets/Form/FormButton/FormButton";

import "./RegisterForm.scss";

class RegisterForm extends Component {
  onSubmit = (formProps) => {
    this.props.signUp(formProps, () => {
      this.props.history.push("/");
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="form-container">
        <h2 className="title">Don't have an account yet?</h2>
        <span>Register below</span>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            type="text"
            name="firstName"
            label="first name"
            component={FormInput}
            required
          ></Field>
          <Field
            type="text"
            name="lastName"
            label="last name"
            component={FormInput}
            required
          ></Field>
          <Field
            type="email"
            name="email"
            label="email"
            component={FormInput}
            required
          ></Field>
          <Field
            type="password"
            name="password"
            label="password"
            component={FormInput}
            required
          ></Field>
          <div className="errorMessage">{this.props.errorMessage}</div>
          <FormButton type="submit" label="register">
            Register
          </FormButton>
          <Link to="/signin">
            <FormButton type="button" label="switch">
              Back to login page
            </FormButton>
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { errorMessage: state.auth.errorMessage };
};

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "register" })
)(RegisterForm);

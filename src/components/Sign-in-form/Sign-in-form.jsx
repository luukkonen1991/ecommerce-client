import React, { Component } from "react";
import { Link } from "react-router-dom";

import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../redux/auth/auth.actions";

import FormInput from "../../ui-assets/Form/FormInput/FormInput";
import FormButton from "../../ui-assets/Form/FormButton/FormButton";

import "./Sign-in-form.scss";

class SignInForm extends Component {
  onSubmit = (formProps) => {
    this.props.signIn(formProps, () => {
      this.props.history.push("/");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="form-container">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit(this.onSubmit)}>
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

          <FormButton type="submit" label="submit">
            Sign in
          </FormButton>
          <Link to="/register">
            <FormButton type="button" label="switch">
              New user? Register here!
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
  reduxForm({ form: "signin" })
)(SignInForm);

// constructor(props) {
//   super(props);

//   this.state = {
//     email: "",
//     password: "",
//   };
// }

// handleSubmit = (e) => {
//   e.preventDefault();
//   this.setState({ email: "", password: "" });
// };

// handleChange = (e) => {
//   const { name, value } = e.target;
//   this.setState({ [name]: value });
// };

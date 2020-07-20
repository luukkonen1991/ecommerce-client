import React, { Component } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../ui-assets/Form/FormInput/FormInput";
import FormButton from "../../ui-assets/Form/FormButton/FormButton";

import "./Sign-in-form.scss";

export default class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="form-container">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="email"
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="password"
          ></FormInput>

          <FormButton type="submit" label="submit">
            Sign in
          </FormButton>
          <Link to="/register">
            <FormButton
              type="button"
              onClick={this.props.handleFormChange}
              label="switch"
            >
              New user? Register here!
            </FormButton>
          </Link>
        </form>
      </div>
    );
  }
}

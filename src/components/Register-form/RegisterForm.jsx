import React, { Component } from "react";
import { Link } from "react-router-dom";

import FormInput from "../../ui-assets/Form/FormInput/FormInput";
import FormButton from "../../ui-assets/Form/FormButton/FormButton";

import "./RegisterForm.scss";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "", name: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="form-container">
        <h2 className="title">Don't have an account yet?</h2>
        <span>Register below</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="name"
            value={this.state.name}
            handleChange={this.handleChange}
            required
            label="name"
          ></FormInput>
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

          <FormButton type="submit" label="register">
            Register
          </FormButton>
          <Link to="/signin">
            <FormButton
              type="button"
              onClick={this.props.handleFormChange}
              label="switch"
            >
              Back to login page
            </FormButton>
          </Link>
        </form>
      </div>
    );
  }
}

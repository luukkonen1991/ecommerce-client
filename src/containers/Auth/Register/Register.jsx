import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import FormInput from "../../../components/UI/Form/FormInput/FormInput";
import FormButton from "../../../components/UI/Form/FormButton/FormButton";
import * as actions from "../../../store/actions/index";

import "./Register.scss";

const Register = ({ history, onAuthRegister }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onAuthRegister(firstName, lastName, email, password, () => {
      history.push("/");
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <h2 className="title-register">Don't have an account yet?</h2>
      <span className="register-sub-title">Register below</span>
      <form onSubmit={submitHandler}>
        <FormInput
          type="text"
          name="firstName"
          value={firstName}
          handleChange={(e) => setFirstName(e.target.value)}
          required
          label="first name"
        ></FormInput>
        <FormInput
          type="text"
          name="lastName"
          value={lastName}
          handleChange={(e) => setLastName(e.target.value)}
          required
          label="last name"
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          required
          label="email"
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          required
          label="password"
        ></FormInput>
        <div className="buttons">
          <FormButton type="submit" label="register">
            Register
          </FormButton>
          <Link to="/signin">
            <FormButton type="button" label="switch">
              Back to login page
            </FormButton>
          </Link>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthRegister: (firstName, lastName, email, password, callback) =>
      dispatch(
        actions.authRegister(firstName, lastName, email, password, callback)
      ),
  };
};

export default connect(null, mapDispatchToProps)(Register);

// class Register extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//     };
//   }

//   submitHandler = (e) => {
//     e.preventDefault();
//     this.props.onAuthRegister(
//       this.state.firstName,
//       this.state.lastName,
//       this.state.email,
//       this.state.password
//     );
//     this.setState({
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//     });
//   };

//   onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <div className="form-container">
//         <h2 className="title">Don't have an account yet?</h2>
//         <span>Register below</span>
//         <form onSubmit={this.submitHandler}>
//           <FormInput
//             type="text"
//             name="firstName"
//             value={this.state.firstName}
//             handleChange={this.onChangeHandler}
//             required
//             label="first name"
//           ></FormInput>
//           <FormInput
//             type="text"
//             name="lastName"
//             value={this.state.lastName}
//             handleChange={this.onChangeHandler}
//             required
//             label="last name"
//           ></FormInput>
//           <FormInput
//             type="email"
//             name="email"
//             value={this.state.email}
//             handleChange={this.onChangeHandler}
//             required
//             label="email"
//           ></FormInput>
//           <FormInput
//             type="password"
//             name="password"
//             value={this.state.password}
//             handleChange={this.onChangeHandler}
//             required
//             label="password"
//           ></FormInput>
//           <div className="buttons">
//             <FormButton type="submit" label="register">
//               Register
//             </FormButton>
//             <Link to="/signin">
//               <FormButton type="button" label="switch">
//                 Back to login page
//               </FormButton>
//             </Link>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

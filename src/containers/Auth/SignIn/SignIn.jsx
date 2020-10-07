import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import FormInput from "../../../components/UI/Form/FormInput/FormInput";
import FormButton from "../../../components/UI/Form/FormButton/FormButton";
import * as actions from "../../../store/actions/index";

import "./SignIn.scss";

const SignIn = ({ onAuthSignIn, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onAuthSignIn(email, password, () => {
      history.push("/");
    });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <h2 className="signin-title">I already have an account</h2>
      <span className="signin-sub-title">
        Sign in with your email and password
      </span>
      <form onSubmit={submitHandler}>
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
          <FormButton type="submit" label="submit">
            Sign in
          </FormButton>
          <Link to="/register">
            <FormButton type="button" label="switch">
              New user? Register here!
            </FormButton>
          </Link>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthSignIn: (email, password, callback) =>
      dispatch(actions.authSignIn(email, password, callback)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);

// class SignIn extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: "",
//     };
//   }

//   submitHandler = async (e) => {
//     e.preventDefault();
//     this.props.onAuthSignIn(this.state.email, this.state.password);
//     this.setState({
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
//         <h2 className="title">I already have an account</h2>
//         <span>Sign in with your email and password</span>
//         <form onSubmit={this.submitHandler}>
//           <FormInput
//             type="email"
//             name="email"
//             value={this.state.email}
//             handleChange={(this.onChangeHandler)}
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
//             <FormButton type="submit" label="submit">
//               Sign in
//             </FormButton>
//             <Link to="/register">
//               <FormButton type="button" label="switch">
//                 New user? Register here!
//               </FormButton>
//             </Link>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

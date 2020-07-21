import React, { useState } from "react";

import { reduxForm, Field } from "redux-form";

import classes from "./ContactForm.module.scss";
import FormInput from "../../ui-assets/Form/FormInput/FormInput";
import Button from "../../ui-assets/Button/Button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  console.log(name, email, message);
  const submitHandler = () => {
    console.log(name, email, message);
  };

  return (
    <div className={classes.ContactForm}>
      <h1>Contact Us</h1>
      <form onSubmit={submitHandler}>
        <Field type="name" name="name" label="name" component={FormInput} />
        <Field type="email" name="email" label="email" component={FormInput} />
        <Field
          type="message"
          name="message"
          label="message"
          component={FormInput}
        />
        <div className={classes.btnClass}>
          <Button type="submit" align="Align-Center">
            submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({ form: "contact" })(ContactForm);

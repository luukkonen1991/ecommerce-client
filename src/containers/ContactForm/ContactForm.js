import React, { useState } from 'react';

import classes from './ContactForm.module.scss';
import FormInput from '../../components/FormInput/FormInput';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const submitHandler = () => {
    console.log('handler');
  };

  return (
    <div className={classes.ContactForm}>
      <h1>Contact Us</h1>
      <form onSubmit={submitHandler}>
        <FormInput
          type="name"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
          label="name"
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          label="email"
        />
        <FormInput
          type="msg"
          name="msg"
          value={msg}
          onChange={event => setMsg(event.target.value)}
          label="msg"
        />
      </form>
    </div>
  );
};

export default ContactForm;

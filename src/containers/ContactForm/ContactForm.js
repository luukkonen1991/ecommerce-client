import React, { useState } from 'react';

import classes from './ContactForm.module.scss';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../ui-assets/Button/Button';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  console.log(name, email, message);
  const submitHandler = () => {
    console.log(name, email, message);
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
          type="message"
          name="message"
          value={message}
          onChange={event => setMessage(event.target.value)}
          label="message"
        />
        <div className={classes.btnClass}>
          <Button
            type="submit"
            align="Align-Center"
          >submit
        </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

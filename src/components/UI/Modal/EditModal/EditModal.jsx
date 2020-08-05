import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";

import FormInput from "../../Form/FormInput/FormInput";
import FormButton from "../../Form/FormButton/FormButton";

import "./EditModal.scss";

// const EditModal = ({ userInfo, toggleModal, onUserUpdate }) => {
//   console.log(userInfo);
//   const [data, setData] = useState(userInfo);
//   console.log(data);
//   console.log(onUserUpdate);

const EditModal = (props) => {
  const [data, setData] = useState(props.userInfo[1]);
  const [title, setTitle] = useState(props.userInfo[0].title);

  const keys = Object.keys(data);

  const modifyKey = (key) => {
    const firstLetter = key.charAt(0).toUpperCase();
    const rest = key
      .split(/(?=[A-Z])/)
      .join(" ")
      .toLowerCase()
      .slice(1);
    return firstLetter + rest;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onUserUpdate(data);
    props.toggleModal();
  };

  return (
    <div className="editmodal">
      <div
        className="x-icon"
        onClick={() => {
          props.toggleModal();
        }}
      >
        X
      </div>
      <div className="editmodal-header">{title ? title : null}</div>
      <div className="editmodal-body">
        <form className="editmodal-form" onSubmit={submitHandler}>
          {keys.map((key) => {
            return (
              <div className={`info-item ${key}`} key={key}>
                <label className="input-label">{key}</label>
                <FormInput
                  type="text"
                  name={modifyKey(key)}
                  value={data[key]}
                  onChange={(e) =>
                    setData({
                      ...data,
                      [key]: e.target.value,
                    })
                  }
                  required
                  formtype="editform-input"
                />
              </div>
            );
          })}
          <FormButton label="edit-success">Save changes</FormButton>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserUpdate: (data) => dispatch(actions.updateUserInfo(data)),
  };
};

export default connect(null, mapDispatchToProps)(EditModal);

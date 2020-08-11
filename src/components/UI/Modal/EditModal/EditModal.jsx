import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";

import Spinner from "../../../UI/Spinner/Spinner";
import FormInput from "../../Form/FormInput/FormInput";
import FormButton from "../../Form/FormButton/FormButton";

import "./EditModal.scss";

const EditModal = (props) => {
  const [data, setData] = useState();
  const [title, setTitle] = useState();

  const keys = Object.keys(props.data[1]);

  useEffect(() => {
    console.log('[EditModal Ran]', props.data);
    setData(props.data[1]);
    setTitle(props.data[0].title);
  }, [props.data]);

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
  if (!data) {
    return <Spinner />;
  } else {
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
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserUpdate: (data) => dispatch(actions.updateUserInfo(data)),
  };
};

export default connect(null, mapDispatchToProps)(EditModal);

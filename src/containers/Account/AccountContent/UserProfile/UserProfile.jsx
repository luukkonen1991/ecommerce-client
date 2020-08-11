// import React, { useEffect, useState } from "react";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Button from "../../../../components/UI/Button/Button";
import EditModal from "../../../../components/UI/Modal/EditModal/EditModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAddressBook } from "@fortawesome/free-solid-svg-icons";
import "./UserProfile.scss";

const UserProfile = (props) => {
  console.log('[INITIAL PROPS UserProfile]', props);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState();
  const [userInfo, setUserInfo] = useState([]);
  // console.log(data);

  useEffect(() => {
    console.log('[UseEffect ran in UserProfile]');
    setUserInfo([
      { title: "Edit your profile information." },
      {
        firstName: props.firstName,
        lastName: props.lastName,
        email: props.email,
      }
    ]);
  }, [props]);

  const toggleModal = (data) => {
    setData(data);
    console.log('[Before modal open]', userInfo);
    setModal(!modal);
  };

  return (
    <div className="profile-container">
      <div className="profile-info-header">
        <h2>My profile information</h2>
        <p>Here you can view and edit your profile and address information.</p>
      </div>
      <div className="profile-sections">
        <div className="profile-section">
          <FontAwesomeIcon className="section-icon" icon={faUser} />

          <div className="user-detail-item">
            <span>Name</span>
            <p className="detail-value">
              {props.firstName} {props.lastName}
            </p>
          </div>
          <div className="user-detail-item">
            <span>Email</span>
            <p className="detail-value">{props.email}</p>
          </div>
          <Button
            className="edit-btn"
            onClick={() => {
              // setData(userInfo);
              console.log('[Log inside onClick]', userInfo);
              toggleModal(userInfo);
            }}
          >
            Edit
          </Button>
        </div>
        <div className="profile-section">
          <FontAwesomeIcon className="section-icon" icon={faAddressBook} />
          <div className="user-detail-item">
            <span>Address</span>
            <p className="detail-value"></p>
          </div>
          <div className="user-detail-item">
            <span>Phone number</span>
            <p className="detail-value"></p>
          </div>
          <Button
            className="edit-btn"
            onClick={() => {
              toggleModal();
            }}
          >
            Edit
          </Button>
        </div>
      </div>
      {modal ? <EditModal data={userInfo} toggleModal={toggleModal} /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    email: state.user.email,
  };
};

export default connect(mapStateToProps)(UserProfile);

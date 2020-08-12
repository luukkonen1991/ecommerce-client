// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
// import { connect } from "react-redux";

import Button from "../../../../components/UI/Button/Button";
import EditModal from "../../../../components/UI/Modal/EditModal/EditModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAddressBook } from "@fortawesome/free-solid-svg-icons";
import "./UserProfile.scss";

const UserProfile = (props) => {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [modalTitle, setModalTitle] = useState({});

  const toggleModal = (userData, title) => {
    setModalData(userData);
    setModalTitle(title);
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
              {props.user.firstName} {props.user.lastName}
            </p>
          </div>
          <div className="user-detail-item">
            <span>Email</span>
            <p className="detail-value">{props.user.email}</p>
          </div>
          <Button
            className="edit-btn"
            onClick={() => {
              toggleModal(
                { firstName: props.user.firstName, lastName: props.user.lastName, email: props.user.email },
                { title: "Edit your profile information." }
              );
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
      {modal ? <EditModal modalTitle={modalTitle} modalData={modalData} toggleModal={toggleModal} onUserUpdate={props.onUserUpdate} /> : null}
    </div>
  );
};


export default UserProfile;


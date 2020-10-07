import React, { useState, useEffect, useRef } from "react";

import Spinner from "../../../UI/Spinner/Spinner";
import FormInput from "../../Form/FormInput/FormInput";
import FormButton from "../../Form/FormButton/FormButton";

import "./EditModal.scss";

const EditModal = (props) => {
  const [data, setData] = useState(props.modalData);
  const ref = useRef();

  const keys = Object.keys(data);

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      props.setModal(false);
    };
    document.body.addEventListener("click", onBodyClick);

    return () => document.body.removeEventListener("click", onBodyClick);
  }, []);

  const modifyKey = (key) => {
    console.log("I ran", key);
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
      <div className="editmodal" ref={ref}>
        <div
          className="x-icon"
          onClick={() => {
            props.toggleModal();
          }}
        >
          X
        </div>
        <div className="editmodal-header">
          {props.modalTitle.title ? props.modalTitle.title : null}
        </div>
        <div className="editmodal-body">
          <form className="editmodal-form" onSubmit={submitHandler}>
            {keys.map((key) => {
              let name = modifyKey(key);
              return (
                <div className={`info-item ${key}`} key={key}>
                  {/* <label className="input-label">{name}</label> */}
                  <FormInput
                    type="text"
                    name={key}
                    label={name}
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onUserUpdate: (data) => dispatch(actions.updateUserInfo(data)),
//   };
// };

// export default connect(null, mapDispatchToProps)(EditModal);
export default EditModal;

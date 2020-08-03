import React, { useState, useEffect } from "react";

import FormInput from "../../Form/FormInput/FormInput";
import Button from "../../Button/Button";

import "./EditModal.scss";

const EditModal = ({ userInfo }) => {
  console.log(userInfo);
  const [data, setData] = useState(userInfo);
  console.log(data);

  //   useEffect(() => {
  //     setData(props[Object.keys(props)[0]]);
  //   });

  const keys = Object.keys(data);
  const modifiedKeys = keys.map((key) => {
    const firstLetter = key.charAt(0).toUpperCase();
    const rest = key
      .split(/(?=[A-Z])/)
      .join(" ")
      .toLowerCase()
      .slice(1);
    console.log(rest);
    return firstLetter + rest;
  });

  return (
    <div className="editmodal">
      <div className="editmodal-header">{data.title ? data.title : null}</div>
      <div className="editmodal-body">
        <form className="userinfo-form">
          {modifiedKeys
            .filter((key) => key !== "Title")
            .map((key) => {
              return (
                <div className={`info-item ${key}`} key={key}>
                  <label className="input-label">{key}</label>
                  <FormInput
                    type="text"
                    name={key}
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
          <Button className="edit-btn" />
        </form>
      </div>
    </div>
  );
};

export default EditModal;

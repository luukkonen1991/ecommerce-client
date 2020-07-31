import React, { useState, useEffect } from "react";

import FormInput from "../../Form/FormInput/FormInput";
import Button from "../../Button/Button";

import "./EditModal.scss";

const EditModal = (props) => {
  console.log(props);
  console.log(props[Object.keys(props)[0]]);
  const [data, setData] = useState(props[Object.keys(props)[0]]);
  console.log(data);

  //   useEffect(() => {
  //     setData(props[Object.keys(props)[0]]);
  //   });

  const keys = Object.keys(Object.values(props)[0]);

  return (
    <div className="editmodal">
      <div className="editmodal-header">{data.title ? data.title : null}</div>
      <div className="editmodal-body">
        <form className="userinfo-form">
          {keys
            .filter((key) => key !== "title")
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
          {/* {createInputs()} */}
          <Button className="edit-btn" />
        </form>
      </div>
    </div>
  );
};

export default EditModal;

//   const createInputs = () => {
//     console.log(data.firstName);
//     const keys = Object.keys(data);
//     const inputs = [];

//     for (const key of keys) {
//       if (key === "title") {
//         continue;
//       }
//       console.log(data.key);
//       inputs.push(
//         <div className={`info-item ${key}`} key={key}>
//           <label className="input-label">{key}</label>
//           <FormInput
//             type="text"
//             name={key}
//             value={data[key]}
//             required
//             formtype="editform-input"
//           />
//         </div>
//       );
//     }
//     return inputs;
//   };

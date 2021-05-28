import React from "react";

import "../../../styles/forms/GeneralInfoFormItem.css";

const GeneralInfoFormItem = (props) => {
  const { generalInfo, setGeneralInfo } = props;
  const handleChange = (e) => {
    setGeneralInfo((prevState) => {
      return Object.assign({}, prevState, { [e.target.name]: e.target.value });
    });
  };
  return (
    <form className="GeneralInfoFormItem" onChange={handleChange}>
      <label htmlFor="personalImage">
        Personal Photo URL
        <input
          id="personalImage"
          name="personalImage"
          type="text"
          defaultValue={generalInfo?.personalImage}
          placeholder="Enter a photo URL here"
        ></input>
      </label>
      <label htmlFor="fullName">
        Full Name
        <input
          id="fullName"
          name="fullName"
          type="text"
          defaultValue={generalInfo?.fullName}
          placeholder="Enter your full name here"
        ></input>
      </label>
      <label htmlFor="tagLine">
        Tag Line
        <input
          id="tagLine"
          name="tagLine"
          type="text"
          defaultValue={generalInfo?.tagLine}
          placeholder="Enter a tag line here"
        ></input>
      </label>
      <label htmlFor="emailAddress">
        Email Address
        <input
          id="emailAddress"
          name="emailAddress"
          type="text"
          placeholder="Enter your email address here"
          defaultValue={generalInfo?.emailAddress}
        ></input>
      </label>
      <label htmlFor="phoneNumber">
        Contact Number
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          placeholder="Enter a contact number here"
          defaultValue={generalInfo?.phoneNumber}
        ></input>
      </label>
      <label htmlFor="website">
        Personal Website / Portfolio URL
        <input
          id="website"
          name="website"
          type="text"
          placeholder="Enter your website here"
          defaultValue={generalInfo?.website}
        ></input>
      </label>
    </form>
  );
};

export default GeneralInfoFormItem;

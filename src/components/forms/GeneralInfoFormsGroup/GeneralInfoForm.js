import React from "react";
import GeneralInfoFormItem from "./GeneralInfoFormItem";

const GeneralInfoForm = (props) => {
  return (
    <div className="GeneralInfoForm">
      <GeneralInfoFormItem
        setGeneralInfo={props.setGeneralInfo}
        generalInfo={props.setGeneralInfo}
      />
    </div>
  );
};

export default GeneralInfoForm;

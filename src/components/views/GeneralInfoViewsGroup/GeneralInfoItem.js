import React from "react";

import "../../../styles/views/GeneralInfoItem.css";

const GeneralInfoItem = (props) => {
  const { generalInfo } = props;
  return (
    <div className="GeneralInfoItem">
      <img
        src={
          generalInfo?.personalImage ||
          "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
        }
        className="personal-photo"
      />
      <div className="GeneralInfoText">
        <h2>{generalInfo?.fullName || "Diego Romero"}</h2>
        <h3>{generalInfo?.tagLine || "Software Developer"}</h3>
        <h3>{generalInfo?.emailAddress || "diegoromeropersonal@gmail.com"}</h3>
        <p>{generalInfo?.phoneNumber || "+54-555-555-555"}</p>
        <a href={generalInfo?.website || "https://github.com/diegoromerodev"}>
          {generalInfo?.website || "https://github.com/diegoromerodev"}
        </a>
      </div>
    </div>
  );
};

export default GeneralInfoItem;

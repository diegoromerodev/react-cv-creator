import uniqid from "uniqid";
import React from "react";
import EducationItem from "./EducationItem";

const Education = (props) => {
  return (
    <div className="Education">
      {props.education.map((el) => {
        return <EducationItem key={uniqid()} education={el} />;
      })}
    </div>
  );
};

export default Education;

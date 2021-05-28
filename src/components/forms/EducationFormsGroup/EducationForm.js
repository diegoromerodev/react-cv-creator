import React from "react";
import EducationFormItem from "./EducationFormItem";

const EducationForm = (props) => {
  const deleteEducation = (id) => {
    props.setEducation(props.education.filter((el) => el.id !== id));
  };

  const handleIndividualChange = (e, index) => {
    props.setEducation((prevState) => {
      prevState[index][e.target.name] = e.target.value;
      return [...prevState];
    });
  };

  return props.education.map((el, index) => {
    return (
      <EducationFormItem
        key={el.id}
        education={el}
        index={index}
        handleAddEducation={props.onAddEducation}
        handleDeleteEducation={deleteEducation}
        handleIndividualChange={handleIndividualChange}
      />
    );
  });
};

export default EducationForm;

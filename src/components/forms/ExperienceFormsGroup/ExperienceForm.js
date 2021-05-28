import React from "react";
import ExperienceFormItem from "./ExperienceFormItem";

const ExperienceForm = (props) => {
  const deleteExperience = (id) => {
    props.setExperience(props.experience.filter((el) => el.id !== id));
  };

  const handleIndividualChange = (e, index) => {
    props.setExperience((prevState) => {
      prevState[index][e.target.name] = e.target.value;
      return [...prevState];
    });
  };

  return props.experience.map((el, index) => {
    return (
      <ExperienceFormItem
        key={el.id}
        experience={el}
        index={index}
        handleAddExperience={props.onAddExperience}
        handleDeleteExperience={deleteExperience}
        handleIndividualChange={handleIndividualChange}
      />
    );
  });
};

export default ExperienceForm;

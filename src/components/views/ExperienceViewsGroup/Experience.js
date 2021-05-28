import uniqid from "uniqid";
import React from "react";
import ExperienceItem from "./ExperienceItem";

const Experience = (props) => {
  return (
    <div className="Experience">
      {props.experience.map((el) => {
        return <ExperienceItem key={uniqid()} experience={el} />;
      })}
    </div>
  );
};

export default Experience;

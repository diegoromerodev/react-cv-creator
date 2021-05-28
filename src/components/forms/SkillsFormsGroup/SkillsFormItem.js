import React from "react";

import "../../../styles/forms/SkillsFormItem.css";

const SkillsFormItem = (props) => {
  const handleChange = (e) => {
    props.setSkills((prevState) => {
      return e.target.value;
    });
  };
  return (
    <form className="SkillsFormItem">
      <label htmlFor="skills">
        Skills / Certifications
        <textarea
          onChange={handleChange}
          defaultValue={props.skills}
          placeholder="Enter any number of skills, separated by the Enter key."
          id="skills"
          name="skills"
        ></textarea>
      </label>
    </form>
  );
};

export default SkillsFormItem;

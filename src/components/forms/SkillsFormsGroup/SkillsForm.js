import React from "react";

import SkillsFormItem from "./SkillsFormItem";

const SkillsForm = (props) => {
  return <SkillsFormItem skills={props.skills} setSkills={props.setSkills} />;
};

export default SkillsForm;

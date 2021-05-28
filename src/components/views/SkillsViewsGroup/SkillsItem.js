import React from "react";

import "../../../styles/views/SkillsItem.css";

const SkillsItem = (props) => {
  return <li className="SkillsItem">{props.skill}</li>;
};

export default SkillsItem;

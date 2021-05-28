import uniqid from "uniqid";
import React from "react";
import SkillsItem from "./SkillsItem";

import "../../../styles/views/Skills.css";

const Skills = (props) => {
  const skillsArray = (
    props.skills || "JavaScript\nC#\nHTML\nCSS\nPython\nReact\nDjango\nXamarin"
  ).split("\n");
  return (
    <div className="Skills">
      <ul className="skills-list">
        {skillsArray.map((el) => {
          return <SkillsItem key={uniqid()} skill={el} />;
        })}
      </ul>
    </div>
  );
};

export default Skills;

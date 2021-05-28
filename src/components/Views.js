import React, { useRef } from "react";

import GeneralInfo from "./views/GeneralInfoViewsGroup/GeneralInfo";
import Experience from "./views/ExperienceViewsGroup/Experience";
import Education from "./views/EducationViewsGroup/Education";
import Skills from "./views/SkillsViewsGroup/Skills";

import "../styles/Views.css";

const Views = React.forwardRef((props, ref) => {
  return (
    <div className="Views" ref={ref}>
      <div className="ViewsContent">
        <h2 className="section-title">Contact Details</h2>
        <GeneralInfo generalInfo={props.generalInfo} />
        <h2 className="section-title">Work Experience</h2>
        <Experience experience={props.experience} />
        <h2 className="section-title">Education / Courses</h2>
        <Education education={props.education} />
        <h2 className="section-title">Skills / Certifications</h2>
        <Skills skills={props.skills} />
      </div>
    </div>
  );
});

export default Views;

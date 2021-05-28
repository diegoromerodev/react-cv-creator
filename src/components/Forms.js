import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

import GeneralInfoForm from './forms/GeneralInfoFormsGroup/GeneralInfoForm';
import EducationForm from './forms/EducationFormsGroup/EducationForm';
import ExperienceForm from './forms/ExperienceFormsGroup/ExperienceForm';
import SkillsForm from './forms/SkillsFormsGroup/SkillsForm';

import '../styles/Forms.css';

const Forms = (props) => {
  const [storeMoved, setStoreMoved] = useState(0);
  const [numberOfForms, setNumberOfForms] = useState(0);
  let moved = storeMoved;
  let allForms;

  useEffect(() => {
    allForms = document.querySelectorAll('.Forms > *:not(#nav-buttons)');
    setNumberOfForms(allForms.length);
  });

  const moveToForm = (e) => {
    const operation = e.target.textContent;
    if (operation === 'NEXT' && moved > (numberOfForms - 1) * -100) {
      moved -= 100;
    }
    if (operation === 'PREVIOUS' && moved < 0) moved += 100;
    allForms.forEach((el) => {
      el.style.transform = `translateX(${moved}%)`;
    });
    setStoreMoved(moved);
  };

  const handleAddExperience = () => {
    props.setExperience((prevState) => {
      return [...prevState, { id: uniqid() }];
    });
  };

  const handleAddEducation = () => {
    props.setEducation((prevState) => {
      return [...prevState, { id: uniqid() }];
    });
  };

  return (
    <div className="FormsContainer">
      <h1 className="web-logo">RESUMÉ</h1>
      <p className="indicator">
        {moved / -100 + 1} of {numberOfForms}
      </p>
      <div className="Forms">
        <GeneralInfoForm
          generalInfo={props.generalInfo}
          setGeneralInfo={props.setGeneralInfo}
        />
        <ExperienceForm
          experience={props.experience}
          setExperience={props.setExperience}
          onAddExperience={handleAddExperience}
        />
        <EducationForm
          education={props.education}
          setEducation={props.setEducation}
          onAddEducation={handleAddEducation}
        />
        <SkillsForm skills={props.skills} setSkills={props.setSkills} />
      </div>
      <nav id="nav-buttons">
        <p onClick={moveToForm}>PREVIOUS</p>
        <p onClick={moveToForm}>NEXT</p>
      </nav>
    </div>
  );
};

export default Forms;

import React from "react";

import "../../../styles/forms/ExperienceFormItem.css";

const ExperienceFormItem = (props) => {
  const { experience } = props;
  return (
    <form
      className="ExperienceFormItem"
      onChange={(e) => props.handleIndividualChange(e, props.index)}
    >
      <label htmlFor="jobTitle">
        Work Area / Position
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          defaultValue={experience?.jobTitle}
          placeholder="Enter your position here"
        ></input>
      </label>
      <label htmlFor="companyName">
        Employer / Company Name
        <input
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Enter the company's name here"
          defaultValue={experience?.companyName}
        ></input>
      </label>
      <label htmlFor="startDateJob">
        Job Starting Date
        <input
          type="date"
          id="startDateJob"
          name="startDate"
          defaultValue={experience?.startDate}
        ></input>
      </label>
      <label htmlFor="endDateJob">
        Job Completion Date
        <input
          type="date"
          id="endDateJob"
          name="endDate"
          defaultValue={experience?.endDate}
        ></input>
      </label>
      <label htmlFor="jobDescription">
        Job / Work Description
        <textarea
          id="jobDescription"
          name="jobDescription"
          placeholder="Enter the job description here"
          defaultValue={experience?.jobDescription}
        ></textarea>
      </label>
      <div className="addDeleteButtons">
        <button
          type="button"
          className="addEntry btn"
          onClick={props.handleAddExperience}
        >
          Add entry
        </button>
        <button
          type="button"
          className="deleteEntry btn"
          onClick={() => props.deleteExperience(experience.id)}
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default ExperienceFormItem;

import React from "react";

import "../../../styles/forms/EducationFormItem.css";

const EducationFormItem = (props) => {
  const { education } = props;
  return (
    <form
      className="EducationFormItem"
      onChange={(e) => props.handleIndividualChange(e, props.index)}
    >
      <label htmlFor="courseName">
        Subject / Course Name
        <input
          type="text"
          id="courseName"
          name="courseName"
          defaultValue={education?.courseName}
          placeholder="Enter the subject's name here"
        ></input>
      </label>
      <label htmlFor="schoolName">
        School / Institution Name
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          placeholder="Enter the institution's name here"
          defaultValue={education?.schoolName}
        ></input>
      </label>
      <label htmlFor="startDate">
        Course Start Date
        <input
          type="date"
          id="startDateSchool"
          name="startDate"
          defaultValue={education?.startDate}
        ></input>
      </label>
      <label htmlFor="endDateSchool">
        Course End Date
        <input
          type="date"
          id="endDateSchool"
          name="endDate"
          defaultValue={education?.endDate}
        ></input>
      </label>
      <label htmlFor="schoolDescription">
        Course Details
        <textarea
          id="schoolDescription"
          name="schoolDescription"
          placeholder="Enter the course details here"
          defaultValue={education?.schoolDescription}
        ></textarea>
      </label>
      <div className="addDeleteButtons">
        <button
          type="button"
          className="addEntry btn"
          onClick={props.handleAddEducation}
        >
          Add entry
        </button>
        <button
          type="button"
          className="deleteEntry btn"
          onClick={() => props.deleteEducation(education.id)}
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default EducationFormItem;

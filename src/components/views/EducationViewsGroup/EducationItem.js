import React from "react";
import date from "date-and-time";

import "../../../styles/views/EducationItem.css";

const EducationItem = (props) => {
  const { education } = props;
  return (
    <div className="EducationItem">
      <h3>{education?.courseName || "Chemical Engineering"}</h3>
      <h4>{education?.schoolName || "Harvard University"}</h4>
      <p>
        <em>
          {education.startDate &&
            date.format(new Date(education?.startDate), "MMM DD, YYYY")}
          {education.startDate && education.endDate && " - "}
          {education?.endDate &&
            date.format(new Date(education?.endDate), "MMM DD, YYYY")}
        </em>
      </p>
      <p>
        {education?.schoolDescription || "I don't even live in the states."}
      </p>
    </div>
  );
};

export default EducationItem;

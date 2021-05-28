import React from "react";
import date from "date-and-time";

import "../../../styles/views/ExperienceItem.css";

const ExperienceItem = (props) => {
  const { experience } = props;
  return (
    <div className="ExperienceItem">
      <h3>{experience?.jobTitle || "Mobile Development Lead"}</h3>
      <h4>{experience?.companyName || "Apple, Inc."}</h4>
      <p>
        <em>
          {experience.startDate &&
            date.format(new Date(experience?.startDate), "MMM DD, YYYY")}
          {experience.startDate && experience.endDate && " - "}
          {experience?.endDate &&
            date.format(new Date(experience?.endDate), "MMM DD, YYYY")}
        </em>
      </p>
      <p>
        {experience?.jobDescription ||
          "I work 24 hours a day.\nIncluding weekends."}
      </p>
    </div>
  );
};

export default ExperienceItem;

import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import uniqid from "uniqid";

import Forms from "./Forms";
import Views from "./Views";

import "../styles/App.css";

const App = () => {
  const [generalInfo, setGeneralInfo] = useState({ id: uniqid() });
  const [experience, setExperience] = useState([{ id: uniqid() }]);
  const [education, setEducation] = useState([{ id: uniqid() }]);
  const [skills, setSkills] = useState("");

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="App">
      <button className="btn" onClick={handlePrint}>
        PRINT
      </button>
      <Forms
        generalInfo={generalInfo}
        experience={experience}
        education={education}
        skills={skills}
        setGeneralInfo={setGeneralInfo}
        setExperience={setExperience}
        setEducation={setEducation}
        setSkills={setSkills}
      />
      <Views
        generalInfo={generalInfo}
        experience={experience}
        education={education}
        skills={skills}
        ref={componentRef}
      />
    </div>
  );
};

export default App;

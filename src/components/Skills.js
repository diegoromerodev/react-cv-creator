import React from "react";
import uniqid from "uniqid";

import "../styles/Skills.css";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: "HTML\nCSS\nJAVASCRIPT\nPYTHON\nC#\nJAVA\nMySQL\nMONGODB\nC++",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      skills: e.target.value,
    });
  }

  render() {
    const { skills } = this.state;
    const { currentlyEditing } = this.props;
    return (
      <div className="Skills">
        <h2>Skills</h2>
        {currentlyEditing ? (
          <textarea
            id="skills"
            onChange={this.handleChange}
            value={skills}
          ></textarea>
        ) : (
          <div className="skills-list">
            <ul className="skills-column-left">
              {skills.split("\n").map((el, i) => {
                if (i % 2 !== 0) return;
                return <li key={uniqid()}>{el}</li>;
              })}
            </ul>
            <ul className="skills-column-right">
              {skills.split("\n").map((el, i) => {
                if (i % 2 === 0) return;
                return <li key={uniqid()}>{el}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Skills;

import React from "react";

import "../styles/Experience.css";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: {
        [props.ids[0]]: {
          company: "Google (2019)",
          description: "Worked at google for half a day.",
        },
        [props.ids[1]]: {
          company: "Facebook (2020)",
          description: "I helped my mom set-up her facebook account.",
        },
      },
      numberOfFields: 2,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleChange(e) {
    const field = e.target;
    const [fieldName, fieldType] = field.id.split("-");
    console.log(field);
    this.setState((prevState) => {
      if (!prevState.experience[fieldName])
        prevState.experience[fieldName] = {};
      prevState.experience[fieldName][fieldType] = field.value;
      return prevState.experience;
    });
  }

  handleAddClick() {
    if (this.state.numberOfFields >= 10) return;
    this.setState((prevState) => ({
      numberOfFields: prevState.numberOfFields + 1,
    }));
  }

  handleRemoveClick() {
    if (this.state.numberOfFields <= 1) return;
    this.setState((prevState) => ({
      numberOfFields: prevState.numberOfFields - 1,
    }));
  }

  render() {
    const { experience, numberOfFields } = this.state;
    const { ids, currentlyEditing } = this.props;
    console.log(this.state);
    console.log(numberOfFields);
    return (
      <div className="Experience">
        <h2>Experience</h2>
        {currentlyEditing ? (
          <div className="exp-form">
            <div className="exp-buttons">
              <button
                className="add-field-btn"
                name="add-exp"
                onClick={this.handleAddClick}
              >
                Add field
              </button>
              <button
                className="rm-field-btn"
                name="remove-exp"
                onClick={this.handleRemoveClick}
              >
                Remove field
              </button>
            </div>
            {ids.map((el, i) => {
              if (i >= numberOfFields) return;
              return (
                <div className="ind-field" key={el + "-parent"}>
                  <input
                    id={el + "-company"}
                    type="text"
                    className="company-field"
                    onChange={this.handleChange}
                    key={el + "-company"}
                    placeholder="Example Company"
                    value={experience[el]?.company}
                  ></input>
                  <input
                    id={el + "-description"}
                    type="text"
                    className="company-field"
                    onChange={this.handleChange}
                    key={el + "-desc"}
                    placeholder="I worked here for 10 years"
                    value={experience[el]?.description}
                  ></input>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="exp-content">
            {ids.map((id, index) => {
              if (index >= numberOfFields) return;
              return (
                <div className="exp-fields" key={id + id}>
                  <h3 key={id + "-company-element"}>
                    {experience[id]?.company}
                  </h3>
                  <p key={id + "-description-element"}>
                    {experience[id]?.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Experience;

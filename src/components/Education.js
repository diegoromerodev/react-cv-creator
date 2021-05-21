import React from "react";

import "../styles/Education.css";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      education: {
        [props.ids[0]]: {
          school: "UCV (2021)",
          schoolDescription: "Chemichal Engineering - 10th Semester",
        },
        [props.ids[1]]: {
          school: "Elementary School (2019)",
          schoolDescription: "I graduated in 3rd grade. Yes.",
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
      if (!prevState.education[fieldName]) prevState.education[fieldName] = {};
      prevState.education[fieldName][fieldType] = field.value;
      return prevState.education;
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
    const { education, numberOfFields } = this.state;
    const { ids, currentlyEditing } = this.props;
    return (
      <div className="Education">
        <h2>Education</h2>
        {currentlyEditing ? (
          <div>
            <div className="edu-buttons">
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
                <div className="ind-field" key={el + "-school-parent"}>
                  <input
                    id={el + "-school"}
                    type="text"
                    onChange={this.handleChange}
                    key={el + "-school"}
                    placeholder="Example University"
                    value={education[el]?.school}
                  ></input>
                  <input
                    id={el + "-schoolDescription"}
                    type="text"
                    onChange={this.handleChange}
                    key={el + "-school-desc"}
                    placeholder="Graduated in 1998"
                    value={education[el]?.schoolDescription}
                  ></input>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            {ids.map((id, index) => {
              if (index >= numberOfFields) return;
              return (
                <div className="edu-info" key={id + id}>
                  <h4 key={id + "-school-element"}>{education[id]?.school}</h4>
                  <p key={id + "-school-description-element"}>
                    {education[id]?.schoolDescription}
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

export default Education;

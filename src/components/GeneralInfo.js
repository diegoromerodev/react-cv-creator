import React from "react";
import uniqid from "uniqid";

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        name: "Diego Romero",
        title: "Software Developer",
        description: "I create stuff!",
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState((prevState) => {
      const newState = prevState;
      newState.info[e.target.name] = e.target.value;
      return newState;
    });
    console.log(this.state);
  }

  render() {
    const { currentlyEditing } = this.props;
    const { name, title, description } = this.state.info;
    return (
      <>
        {currentlyEditing ? (
          <form onChange={this.handleChange}>
            <input type="text" name="name" defaultValue={name}></input>
            <input type="text" name="title" defaultValue={title}></input>
            <textarea name="description" defaultValue={description}></textarea>
          </form>
        ) : (
          <div>
            <h1>{name}</h1>
            <h3>{title}</h3>
            {description.split("\n").map((text) => (
              <p key={uniqid()}>{text}</p>
            ))}
          </div>
        )}
      </>
    );
  }
}

export default GeneralInfo;

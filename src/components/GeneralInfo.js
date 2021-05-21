import React from "react";
import uniqid from "uniqid";

import "../styles/GeneralInfo.css";

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        image:
          "https://cdn.britannica.com/22/206222-131-E921E1FB/Domestic-feline-tabby-cat.jpg",
        name: "Diego Romero",
        title: "Software Developer",
        description:
          "I love to create things.\nPlease take a look at my work and contact me if you like any of it.",
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
    const { image, name, title, description } = this.state.info;
    return (
      <div className="GeneralInfo">
        {currentlyEditing ? (
          <form className="general-form" onChange={this.handleChange}>
            <h2>General Info</h2>
            <input
              type="text"
              name="image"
              placeholder="Enter an image link"
              defaultValue={image}
            ></input>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              defaultValue={name}
            ></input>
            <input
              type="text"
              name="title"
              placeholder="Enter your job title"
              defaultValue={title}
            ></input>
            <textarea
              name="description"
              placeholder="Describe yourself"
              defaultValue={description}
            ></textarea>
          </form>
        ) : (
          <div className="container">
            <div className="info-cont">
              <h1>{name}</h1>
              <span>
                <h3>{title}</h3>
              </span>
              {description.split("\n").map((text) => (
                <p key={uniqid()}>{text}</p>
              ))}
            </div>
            <img src={image}></img>
          </div>
        )}
      </div>
    );
  }
}

export default GeneralInfo;

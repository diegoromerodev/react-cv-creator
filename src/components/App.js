import React from "react";

import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";

import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyEditing: true,
      ids: (function () {
        const arrID = [];
        for (let i = 0; i < 10; i++) {
          arrID.push("_" + Math.random().toString(36).substr(2, 9));
        }
        return arrID;
      })(),
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    const { currentlyEditing } = this.state;
    this.setState({
      currentlyEditing: !currentlyEditing,
    });
  }

  render() {
    return (
      <>
        <button id="edit-btn" onClick={this.toggleEdit}>
          {this.state.currentlyEditing ? "SAVE ALL" : "EDIT"}
        </button>
        <div className="App">
          <h1 className="cv-head">CURRICULUM VITAE</h1>
          <GeneralInfo currentlyEditing={this.state.currentlyEditing} />
          <Experience
            currentlyEditing={this.state.currentlyEditing}
            ids={this.state.ids}
          />
          <div className="app-flex-cont">
            <Skills currentlyEditing={this.state.currentlyEditing} />
            <Education
              ids={this.state.ids}
              currentlyEditing={this.state.currentlyEditing}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;

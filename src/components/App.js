import React from "react";

import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyEditing: false,
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
        <button onClick={this.toggleEdit}>EDIT?</button>
        <GeneralInfo currentlyEditing={this.state.currentlyEditing} />
        <Experience />
        <div>
          <Skills />
          <Education />
        </div>
      </>
    );
  }
}

export default App;

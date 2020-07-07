import React, { Component } from "react";
// import ReactGA from "react-ga";
// import $ from "jquery";
import "./Projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Hello to a new page</p>
        <ul>
          {["Alex", "John", "Jaz", "fedrik", "missali"].map((user, idx) => {
            return <li key={idx}>{user}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Projects;

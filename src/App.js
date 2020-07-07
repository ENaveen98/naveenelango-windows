import React, { Component } from "react";
import "./App.css";

import MainPage from "./pages/MainPage";
import Projects from "./pages/Projects";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        {/*All our Routes goes here!*/}
        <Route exact path="/" component={MainPage} />
        <Route exact path="/projects" component={Projects} />
      </Router>
    );
  }
}

export default App;

import React from "react";
import { Component } from "react";

require("../assets/styles/_theme.scss");
require("../assets/styles/_loaders.scss");

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main className = "content" >
        { this.props.children }
      </main>
    )
  }
}

export default App;

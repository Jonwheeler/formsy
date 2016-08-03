import React from "react";
import { Component } from "react";

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

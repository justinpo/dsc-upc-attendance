import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";

class App extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="App">
        <Navbar />
        <section
          style={{
            padding: "80px",
            maxWidth: "1000px",
            margin: "0 auto"
          }}
        >
          <Header />
          <Body />
        </section>
      </div>
    );
  }
}
export default App;

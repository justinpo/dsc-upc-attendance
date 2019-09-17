import React, { Component } from "react";
import "./styles.scss";

import Hero from "../../images/hero.png";

import { db } from "../../firebase";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attendees: 0
    };
  }

  componentDidMount() {
    db.collection("attendees")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ attendees: data.length });
      });
  }

  render() {
    const { attendees } = this.state;

    return (
      <div className="Header">
        <div className="Header_textGroup">
          {attendees > 0 ? (
            <>
              <h1 className="Header_text">{attendees}</h1>
              <h1 className="Header_label">
                {attendees === 1 ? "attendee" : "attendees"}
              </h1>
            </>
          ) : (
            <div></div>
          )}
        </div>
        <img className="Header_image" src={Hero} alt="Hero" />
      </div>
    );
  }
}

export default Header;

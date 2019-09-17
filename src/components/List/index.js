import React, { Component } from "react";
import "./styles.scss";
import PerfectScrollbar from "react-perfect-scrollbar";
import "../../scss/perfect-scrollbar.scss";

import Card from "../Card";

import { db } from "../../firebase";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attendees: null
    };
  }

  componentDidMount() {
    db.collection("attendees")
      .orderBy("date_and_time", "desc")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ attendees: data });
      });
  }

  render() {
    const { attendees } = this.state;

    const attendeesList =
      attendees && attendees.length > 0
        ? attendees.map((attendee, index) => (
            <div className="List_item" key={index}>
              <p className="List_item_text">{`${attendee.first_name} ${attendee.last_name}`}</p>
            </div>
          ))
        : null;

    return (
      <Card className="List_card" label="List">
        <PerfectScrollbar className="List">{attendeesList}</PerfectScrollbar>
      </Card>
    );
  }
}

export default List;

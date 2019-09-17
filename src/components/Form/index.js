import React, { Component } from "react";
import "./styles.scss";

import Card from "../Card";
import Input from "../Input";

import { db } from "../../firebase";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        first_name: "",
        last_name: "",
        course: "",
        date_and_time: null
      }
    };
  }

  addAttendee = () => {
    const { formData } = this.state;
    const { first_name, last_name, course } = formData;

    if (first_name !== "" && last_name !== "" && course !== "") {
      const data = {
        ...formData,
        date_and_time: new Date()
      };

      db.collection("attendees")
        .doc(
          Math.random()
            .toString(36)
            .substring(6)
        )
        .set(data)
        .then(() => {
          window.location = "/";
        })
        .catch(error => console.log(error.message, "Create user failed"));
    }
  };

  handleChange = (name, value) => {
    const { formData } = this.state;

    this.setState({
      formData: {
        ...formData,
        [name]: value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addAttendee();
  };

  render() {
    const { formData } = this.state;
    const { first_name, last_name, course } = formData;

    return (
      <Card className="Form_card" label="Form">
        <form>
          <div className="Form_inputGroup">
            <Input
              className="Form_input"
              placeholder="First Name"
              onChange={e => this.handleChange("first_name", e.target.value)}
              defaultValue={first_name}
            />
            <Input
              className="Form_input"
              placeholder="Last Name"
              onChange={e => this.handleChange("last_name", e.target.value)}
              defaultValue={last_name}
            />
          </div>
          <Input
            className="Form_input"
            placeholder="Course (e.g. BS Computer Science)"
            onChange={e => this.handleChange("course", e.target.value)}
            defaultValue={course}
          />
          <button className="Form_button" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </Card>
    );
  }
}

export default Form;

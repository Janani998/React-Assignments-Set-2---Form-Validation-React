import React from "react";
import "../styles/App.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gender: "male",
      phNo: "",
      password: "",
      errorMessage: "",
      userName: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const alphanumeric = /^[0-9a-zA-Z ]+$/;
    const numbers = /^\d+$/;
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.phNo === "" ||
      this.state.gender === "" ||
      this.state.password === ""
    ) {
      this.setState({ errorMessage: "All fields are mandatory", userName: "" });
      return;
    }
    if (!this.state.name.match(alphanumeric)) {
      this.setState({ errorMessage: "Name is not alphanumeric", userName: "" });
      return;
    }
    if (this.state.email.indexOf("@") < 1) {
      this.setState({ errorMessage: "Email must contain @", userName: "" });
      return;
    }

    if (!this.state.gender) {
      this.setState({
        errorMessage: "Please identify as male, female or others",
        userName: ""
      });
      return;
    }
    if (!numbers.test(this.state.phNo)) {
      this.setState({
        errorMessage: "Phone Number must contain only numbers",
        userName: ""
      });
      return;
    }
    if (this.state.password.length < 6) {
      this.setState({
        errorMessage: "Password must contain atleast 6 letters",
        userName: ""
      });
      return;
    }
    const user = this.state.email.substring(0, this.state.email.indexOf("@"));
    this.setState({
      userName: user,
      errorMessage: "",
      name: "",
      email: "",
      gender: "male",
      phNo: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
        {this.state.userName && <div>Hello {this.state.userName}</div>}
        <input
          data-testid="name"
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          data-testid="email"
          type="text"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          data-testid="gender"
          type="text"
          name="gender"
          value={this.state.gender}
          onChange={this.handleChange}
        />
        <input
          data-testid="phoneNumber"
          type="text"
          name="phNo"
          placeholder="Phone Number"
          value={this.state.phNo}
          onChange={this.handleChange}
        />
        <input
          data-testid="password"
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button data-testid="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

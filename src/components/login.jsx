import React from "react";
import "../styles/App.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gender: "",
      phNo: "",
      password: "",
      errorMessage: "",
      userName: ""
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePhoneNoChange = (event) => {
    this.setState({ phNo: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = () => {
    const alphanumeric = /^[0-9a-zA-Z ]+$/;
    const numbers = /^\d+$/;
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.gender === "" ||
      this.state.phNo === "" ||
      this.state.password === ""
    ) {
      this.setState({ errorMessage: "All fields are mandatory" });
      return;
    }
    if (!this.state.name.match(alphanumeric)) {
      this.setState({ errorMessage: "Name is not alphanumeric" });
      return;
    }
    if (this.state.email.indexOf("@") < 1) {
      this.setState({ errorMessage: "Email must contain @" });
      return;
    }

    if (!this.state.gender) {
      this.setState({
        errorMessage: "Please identify as male, female or others"
      });
      return;
    }
    if (!numbers.test(this.state.phNo)) {
      this.setState({ errorMessage: "Phone Number must contain only numbers" });
      return;
    }
    if (this.state.password.length < 6) {
      this.setState({
        errorMessage: "Password must contain atleast 6 letters"
      });
      return;
    }
    const user = this.state.email.substring(0, this.state.email.indexOf("@"));
    this.setState({
      userName: user,
      errorMessage: "",
      name: "",
      email: "",
      phNo: "",
      password: ""
    });
  };

  render() {
    return (
      <form>
        <input
          data-testid="name"
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          data-testid="email"
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <div data-testid="gender" onChange={this.handleChangeValue}>
          <input type="radio" value="male" name="gender" checked="checked" />
          <label for="male">Male</label>
          <input type="radio" value="female" name="gender" />
          <label for="female">Female</label>
          <input type="radio" value="other" name="gender" />
          <label for="other">Other</label>
        </div>
        <input
          data-testid="phoneNumber"
          type="text"
          placeholder="Phone Number"
          value={this.state.phNo}
          onChange={this.handlePhoneNoChange}
        />
        <input
          data-testid="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <button data-testid="submit" onClick={this.handleSubmit}>
          Submit
        </button>
        {this.state.errorMessage && (
          <div>{this.state.errorMessage}</div>
          // <ErrorMessage error={this.state.errorMessage} />
        )}
        {this.state.userName && (
          <div>Hello {this.state.userName}</div>
          // <Welcome userName={this.state.userName} />
        )}
      </form>
    );
  }
}

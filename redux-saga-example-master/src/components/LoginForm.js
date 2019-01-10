import React, { Component } from "react";
import { connect } from "react-redux";
import LoginDisplay from "./LoginDisplay";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  inputName = evt => {
    this.setState({ name: evt.target.value });
  };

  inputSurname = evt => {
    this.setState({ surname: evt.target.value });
  };
  render() {
    return (
      <div>
        <input onChange={this.inputName} />
        <input onChange={this.inputSurname} />
        <button onClick={() => this.props.sendName(this.state.name, this.state.surname)} >
          Send
        </button>
        <LoginDisplay />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispachToProps = dispatch => {
  return {
    sendName: (name, surname) =>
      dispatch({ type: "SEND_USER", value: { name, surname } })
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(LoginForm);

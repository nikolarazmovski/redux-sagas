import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import GetButton from "./components/GetButton";
import LoginForm from "./components/LoginForm";

class App extends Component {
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
      <div className="App">
        <button onClick={this.props.onResetAll}>Reset all</button>
        <GetButton />
        <LoginForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispachToProps = dispatch => {
  return {
    onResetAll: () => dispatch({ type: "RESET_ALL"})
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);

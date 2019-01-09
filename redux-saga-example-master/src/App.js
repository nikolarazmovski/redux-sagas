import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  constructor(){
    super();
    this.state = {};
  }

  inputName = (evt) => {
    this.setState({name: evt.target.value});
  }

  inputSurname = (evt) => {
    this.setState({surname: evt.target.value});
  }
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <div>
          <input onChange={this.inputName}/>
          <input onChange={this.inputSurname}/>
        <button onClick={() => this.props.sendName(this.state.name, this.state.surname)}>Send</button>
        <h1>Hi {this.props.hi}</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    hi: state.hi
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
    sendName: (name, surname) => dispatch({ type: "SEND_NAME", value: {name, surname}})
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);

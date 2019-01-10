import React, { Component } from "react";
import { connect } from "react-redux";

class LoginDisplay extends Component {
  render() {
    return (
      <div>
        {this.props.gereetings && <h1>{this.props.gereetings}</h1>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gereetings: state.reducerLogin.gereetings
  };
};

const mapDispachToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(LoginDisplay);

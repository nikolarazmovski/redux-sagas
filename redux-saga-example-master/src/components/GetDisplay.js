import React, { Component } from "react";
import { connect } from "react-redux";

class GetDisplay extends Component {
  render() {
    return (
      <div>
        {this.props.randomData && <h1>{this.props.randomData}</h1>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    randomData: state.randomData
  };
};

const mapDispachToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(GetDisplay);

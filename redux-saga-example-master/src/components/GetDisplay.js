import React, { Component } from "react";
import { connect } from "react-redux";

class GetDisplay extends Component {
  render() {
    return (
      <div>
        {this.props.randomData && <span>{this.props.randomData}</span>}
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

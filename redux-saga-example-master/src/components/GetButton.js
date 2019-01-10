import React, { Component } from "react";
import { connect } from "react-redux";
import GetDisplay from "./GetDisplay";

class GetButton extends Component {
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
                <button onClick={this.props.getRandomData}>Get Random</button>
                <GetDisplay />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    };
};

const mapDispachToProps = dispatch => {
    return {
        getRandomData: () => dispatch({ type: "GET_RANDOM_DATA" })
    };
};
export default connect(
    mapStateToProps,
    mapDispachToProps
)(GetButton);

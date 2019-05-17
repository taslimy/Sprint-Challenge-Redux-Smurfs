import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

class Smurfs extends Component {
  constructor() {
    super();
    this.state = {
      smurfBio: {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <Fragment>
        <h1>SMURF:</h1>
        {this.props.smurfBio.map(smurf => (
          <div key={smurf}>
            <h3>Name: {smurf.name}</h3>
            <h3>Age: {smurf.age}</h3>
            <h3>Height: {smurf.height}</h3>
          </div>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfBio: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(Smurfs);

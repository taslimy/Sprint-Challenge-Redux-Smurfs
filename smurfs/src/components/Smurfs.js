import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";

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

  handleChanges = e => {
    this.setState({
      smurfBio: {
        ...this.state.smurfBio,
        [e.target.name]: e.target.value
      }
    });
  };

  addSmurf = e => {
    console.log(this.state);
    e.preventDefault();
    this.props.addSmurf(this.state.smurfBio);
    this.setState({
      smurfBio: {
        name: "",
        age: "",
        height: ""
      }
    });
    console.log("addbutton");
  };

  render() {
    console.log(this.props.smurfBio);
    return (
      <Fragment>
        <h1>SMURF:</h1>
        {this.props.smurfBio.map(smurf => (
          <div>
            <h3>Name: {smurf.name}</h3>
            <h3>Age: {smurf.age}</h3>
            <h3>Height: {smurf.height}</h3>
          </div>
        ))}
        <form onSubmit={this.addSmurf}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.smurfBio.name}
            onChange={this.handleChanges}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={this.state.smurfBio.age}
            onChange={this.handleChanges}
          />
          <input
            type="number"
            name="height"
            placeholder="Height"
            value={this.state.smurfBio.height}
            onChange={this.handleChanges}
          />

          <button onClick={this.addSmurf}>Add Smurf</button>
        </form>
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
  { getSmurfs, addSmurf }
)(Smurfs);

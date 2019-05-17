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
        <div className="ui compact message">
          <div className="content">
            <p>
              Want to become a part of the <strong>Smurf Family?</strong> add
              yourself below.
            </p>
          </div>
        </div>
        {this.props.smurfBio.map(smurf => (
          <div className="ui card container">
            <div className="content">
              <div className="header">{smurf.name}</div>
            </div>
            <div className="content">
              <div className="description">
                <p> Age: {smurf.age} </p>
                <p>Height: {smurf.height}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="ui card container">
          <div className="content">
            <h1 className="header">Add a Smurf</h1>
            <form className="ui form" onSubmit={this.addSmurf}>
              <div className="field">
                <label>Name</label>
                <div className="ui input">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.smurfBio.name}
                    onChange={this.handleChanges}
                  />
                </div>
              </div>
              <div className="field">
                <label>Age</label>
                <div className="ui input">
                  <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={this.state.smurfBio.age}
                    onChange={this.handleChanges}
                  />
                </div>
              </div>
              <div className="field">
                <label>Height</label>
                <div className="ui input">
                  <input
                    type="text"
                    name="height"
                    placeholder="Height"
                    value={this.state.smurfBio.height}
                    onChange={this.handleChanges}
                  />
                </div>
              </div>
              <button className="ui positive button" onClick={this.addSmurf}>
                Add Smurf
              </button>
            </form>
          </div>
        </div>
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

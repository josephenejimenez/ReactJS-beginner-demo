import React, { Component } from "react";
import BellA from "./bellA.png";
import BellB from "./bellB.png";

export class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Subscribe to Simplilearn",
      sub: "Subscribe",
      imageURL: BellA,
    };
  }

  styles = {
    fontStyle: "italic",
    color: "purple",
  };

  ButtonChange = () => {
    this.setState({
      message: "Hit the bell icon to never miss an update",
      sub: "Subscribed",
    });
  };

  imageChange = () =>{
    this.setState({
      imageURL: BellB,
      message: "Thanks for hitting the bell icon"
    });
  }

  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
        <p />
        <img src={this.state.imageURL} onClick={this.imageChange} width={50}></img>
      </div>
    );
  }
}

export default NewComp;

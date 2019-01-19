import React from "react";
import ReactDOM from "react-dom";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.clickMe = this.clickMe.bind(this);
    this.state = {
      times: 0,
      message: ["Sample Component from React JS"]
    };
  }

  clickMe(e) {
    e.preventDefault();
    this.setState({ times: this.state.times + 1 });
    //alert("clicked " + this.state.times + " times");
  }

  componentDidMount() {
    this.state.message.push("Component loaded successfully");
  }

  render() {
    return (
      <section className="my-component" onClick={this.clickMe}>
        <h2 className="heading">Custom Component - {this.props.message}</h2>
        <div>{this.state.message.join(", ")}</div>
        <h4>clicked {this.state.times} times</h4>
      </section>
    );
  }
}

export default MyComponent;

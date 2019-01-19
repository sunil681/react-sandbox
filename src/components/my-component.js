import React from "react";
import ReactDOM from "react-dom";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.clickMe = this.clickMe.bind(this);
    this.state = {
      times: 1
    };
  }

  clickMe(e) {
    e.preventDefault();
    this.setState({ times: this.state.times + 1 });
    alert("clicked " + this.state.times + " times");
  }

  componentDidMount() {}

  componentWillMount() {}

  render() {
    return (
      <section className="my-component" onClick={this.clickMe}>
        <h2 className="heading">Custom Component</h2>
        <div>Sample Component From React JS</div>
      </section>
    );
  }
}

export default MyComponent;

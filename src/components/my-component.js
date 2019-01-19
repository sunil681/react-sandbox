import React from "react";
import ReactDOM from "react-dom";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.clickMe = this.clickMe.bind(this);
  }

  clickMe(e) {
    e.preventDefault();
    alert("clicked");
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

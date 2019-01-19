import React from "react";
import ReactDOM from "react-dom";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return false;
  }

  componentWillMount() {
    return false;
  }

  render() {
    return (
      <section class="custom-component">
        <h2>Custom Component</h2>
        <div>Sample Component From React JS</div>
      </section>
    );
  }
}

export default MyComponent;

import React, { Component } from "react";

export class Produto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ id: id });
  }

  render() {
    return (
      <div className="produto">
        <h1>Produto {this.state.id}</h1>
      </div>
    );
  }
}

export default Produto;

import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Error extends Component {
  render() {
    return (
      <div className="error">
        <h1>Página não encontrada</h1>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default Error;

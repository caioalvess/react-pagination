import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link style={{ margin: "0 20px" }} to="/">
          Home
        </Link>
        <Link style={{ margin: "0 20px" }} to="/sobre">
          Sobre
        </Link>
      </div>
    );
  }
}

export default Header;

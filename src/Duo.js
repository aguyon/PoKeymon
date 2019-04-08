import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Duo extends Component {
  render() {
    return (
      <div>
        <NavLink to="/"> Accueil </NavLink><br /> 
        <NavLink to="/solo-mode"> Solo Mode </NavLink><br /> 
        <NavLink to="/dual-mode" activeClassName="selected"> Dual Mode </NavLink><br /> 
        <NavLink to="/pokedex"> Pokedex </NavLink>
        <h2>Dual Mode</h2>
      </div>
    );
  }
}

export default Duo;
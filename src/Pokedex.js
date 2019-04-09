import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Pokedex extends Component {
  render() {
    return (
      <div>
        <NavLink to="/"> Accueil </NavLink><br /> 
        <NavLink to="/solo-mode"> Solo Mode </NavLink><br /> 
        <NavLink to="/dual-mode"> Dual Mode </NavLink><br /> 
        <NavLink to="/pokedex" activeClassName="selected"> Pokedex </NavLink>
        <h2>Pokedex</h2>
      </div>
    );
  }
}

export default Pokedex;
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" activeClassName="selected"> Accueil </NavLink><br /> 
        <NavLink to="/solo-mode"> Solo Mode </NavLink><br /> 
        <NavLink to="/dual-mode"> Dual Mode </NavLink><br /> 
        <NavLink to="/pokedex"> Pokedex </NavLink>
        <h2>Accueil</h2>
      </div>
    );
  }
}

export default Home;

import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/AlerteResultat.css';
import { NavLink } from 'react-router-dom';
import PokemonACapturer from './PokemonACapturer';


class AlerteResultat extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: true,
    };

    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    const { pokemonName, newUser } = this.props;
    if (!localStorage.getItem(`${newUser}listPokemons`)) {
      localStorage.setItem(`${newUser}listPokemons`, '[]');
    }
    const newListPokemons = JSON.parse(localStorage.getItem(`${newUser}listPokemons`));
    newListPokemons.push(pokemonName);
    localStorage.setItem(`${newUser}listPokemons`, JSON.stringify(newListPokemons));

    localStorage.getItem('userActive');
    this.setState({ newUser: localStorage.getItem('userActive') });
  }

  refreshPage = () => {
    window.location.reload();
  }

  handleClose() {
    this.setState({ show: false });
  }

  render() {
    const { pokemonName, pokemon } = this.props;
    const { show, newUser } = this.state;
    return (
      <div>
        <Modal id="modalAlerte" show={show} onHide={this.handleClose}>
          <Modal.Header id="sasa" closeButton>
            <Modal.Title>
              <p id="victory">
                Congratulations,
                {' '}
                {newUser}
                {' '}
                !
              </p>

            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalBody">
            Woohoo,
            {' '}
            {pokemonName}
            {' '}
            joined your team!
            <div className="pokemonCap">
              <PokemonACapturer index={pokemon} showPokemon imageOnly />
            </div>
          </Modal.Body>
          <Modal.Footer id="modalFoot">
            <Button className="buttonModal" onClick={this.refreshPage}>
              Next Game
            </Button>
            <NavLink to="/pokedex">
              <Button className="buttonModal" onClick={this.handleClose}>
                Pokedex
              </Button>
            </NavLink>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AlerteResultat;

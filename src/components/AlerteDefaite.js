import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/AlerteResultat.css';
import { NavLink } from 'react-router-dom';


class AlerteDefaite extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: true,
      newUser: '',
    };
  }

  componentDidMount() {
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
    const { show, newUser } = this.state;
    return (
      <div>
        <Modal id="modalAlerte" show={show} onHide={this.handleClose}>
          <Modal.Header id="sasa" closeButton>
            <Modal.Title>
              <p id="victory">
                 Oh no!
                {' '}
                {newUser}
                {' '}

              </p>

            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalBody">
            You are late!!!
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

export default AlerteDefaite;

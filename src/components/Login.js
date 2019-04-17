import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../css/Login.css';

export default class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h1 style={{ marginTop: '10%', marginBottom: '5%', color: 'black' }}> Joint the game </h1>
        <h5 style={{ color: 'black' }}> choose an username</h5>
        <form onSubmit={this.handleSubmit}>

          <input type="text" name="user" style={{ marginBottom: '20px', width: '50%', borderRadius: '5px' }} />

          <Button
            block
            bsSize="large"
            type="submit"
          >
            Catch them all
          </Button>
        </form>
      </div>
    );
  }
}

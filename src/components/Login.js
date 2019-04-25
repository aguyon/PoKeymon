import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import '../css/Login.css';

export default class Login extends Component {
  // eslint-disable-next-line class-methods-use-this
  onNavigateHome() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="Login">
        <div id="joint-the-game">
          <h1> Join the game </h1>
        </div>
        <div id="text-user">
          Enter your name
        </div>
        <form onSubmit={this.handleSubmit}>
          <div id="text-login">
            <input type="text" name="user" style={{ marginBottom: '20px', width: '50%', borderRadius: '5px' }} />
          </div>
          <Button
            onClick={this.onNavigateHome}
            className="btn btn-primary"
            block
            type="submit"
          >
            Catch them all
          </Button>
        </form>
      </div>
    );
  }
}

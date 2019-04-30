import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import '../css/Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '' };
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

    onNavigateHome = () => {
      const { name } = this.state;
      browserHistory.push('/');
      localStorage.setItem('userActive', name);
    }

    render() {
      return (
        <div className="Login">
          <div id="join-the-game">
            <h1> Join the Game !</h1>
          </div>
          <div id="text-user">
            Enter your name
          </div>
          <form onSubmit={this.handleSubmit}>
            <div id="input-login">
              <input type="text" name="user" onChange={this.handleChange} />
            </div>
            <div className="containerBtn">
              <button
                onClick={this.onNavigateHome}
                className="btnLogin"
                type="submit"
              >
                CATCH THEM ALL
              </button>
            </div>
          </form>
        </div>
      );
    }
}

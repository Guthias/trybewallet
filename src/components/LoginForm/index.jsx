import React, { Component } from 'react';

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email-input">
            <span>Email</span>
            <input id="email-input" data-testid="email-input" />
          </label>

          <label htmlFor="password-input">
            <span>Password</span>
            <input id="password-input" data-testid="password-input" />
          </label>

          <div className="login-button-area">
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    validForm: false,
  }

  render() {
    const { email, password, validForm } = this.state;
    return (
      <main>
        <form>
          <label htmlFor="email-input">
            <span>Email</span>
            <input
              id="email-input"
              data-testid="email-input"
              type="text"
              value={ email }
            />
          </label>

          <label htmlFor="password-input">
            <span>Password</span>
            <input
              id="password-input"
              data-testid="password-input"
              type="password"
              value={ password }
            />
          </label>

          <div className="login-button-area">
            <button type="submit" disabled={ !validForm }>Entrar</button>
          </div>
        </form>
      </main>
    );
  }
}

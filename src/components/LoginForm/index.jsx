import React, { Component } from 'react';
import emailValidator from '../../helpers/emailValidator';
import passwordValidator from '../../helpers/passwordValidator';

export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    validForm: false,
  }

  isValidForm = () => {
    const { email, password } = this.state;
    this.setState({ validForm: emailValidator(email) && passwordValidator(password) });
  }

  handdleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, this.isValidForm);
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
              name="email"
              data-testid="email-input"
              type="text"
              value={ email }
              onChange={ this.handdleChange }
            />
          </label>

          <label htmlFor="password-input">
            <span>Password</span>
            <input
              id="password-input"
              name="password"
              data-testid="password-input"
              type="password"
              value={ password }
              onChange={ this.handdleChange }
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

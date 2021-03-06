import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { func } from 'prop-types';

import { userLogin } from '../../actions';
import emailValidator from '../../helpers/emailValidator';
import passwordValidator from '../../helpers/passwordValidator';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    validForm: false,
    login: false,
  }

  isValidForm = () => {
    const { email, password } = this.state;
    this.setState({ validForm: emailValidator(email) && passwordValidator(password) });
  }

  handdleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, this.isValidForm);
  }

  handdleClick = (event) => {
    event.preventDefault();

    const { email } = this.state;
    const { makeUserLogin } = this.props;
    makeUserLogin(email);
    this.setState({ login: true });
  }

  render() {
    const { email, password, validForm, login } = this.state;

    if (login) {
      return <Redirect to="/carteira" />;
    }

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
            <button
              type="submit"
              disabled={ !validForm }
              onClick={ this.handdleClick }
            >
              Entrar
            </button>
          </div>
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  makeUserLogin: (email) => {
    dispatch(userLogin(email));
  },
});

LoginForm.propTypes = {
  makeUserLogin: func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginForm);

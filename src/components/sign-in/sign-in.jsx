import React, { Component } from 'react';

import './sign-in.scss';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input type="text" name="email" value={this.state.email} required />
          <label htmlFor="email" Email />
          <input
            type="text"
            name="password"
            value={this.state.password}
            required
          />
          <label htmlFor="password">Password></label>

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

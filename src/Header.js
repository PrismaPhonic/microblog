import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { Routes } from './Routes';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Jumbotron color="primary" className="Header">
        <h1>Microblog</h1>
        <h5>Get in the Rithm of blogging!</h5>
        <Link className="mx-2" to="/">Blog</Link>
        <Link className="mx-2" to="/new">Add a new post</Link>
      </Jumbotron>
    );
  }
}

export default Header;

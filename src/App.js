import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Routes from './Routes';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Header />
        <Routes />
      </Container>
    );
  }
}

export default App;

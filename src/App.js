import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Routes from './Routes';
import Header from './Header';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit, faTrashAlt)

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

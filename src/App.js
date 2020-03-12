import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Virus from './Virus';
import { Container } from "semantic-ui-react";
import Navbar from "./NavBar";
import VirusForm from "./VirusForm"



function App() {
  return (
    <>
    <Container>
      <Navbar />
        {/* <Switch> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path ="/Virus" component={Virus} />
        {/* </Switch> */}
      </Container>
    </>
  );
}

export default App;

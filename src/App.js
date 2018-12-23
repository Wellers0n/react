import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' exact component={Home}/>
          <Route path='/contatos' component={Contatos}/>
          <Route path='/sobre' component={Sobre}/>
          <Link to="/" children="Home"/><br/>
          <Link to="/contatos" children="Contatos"/><br/>
          <Link to="/sobre" children="Sobre"/>
        </div>
      </BrowserRouter>
    );
  }
}

const Home = () => {
    return(
      <h1>Testing pag home</h1> 
    )
}

const Sobre = () => {
    return(
      <h1>Testing pag sobre</h1> 
    )
}

const Contatos = () => {
    return(
      <h1>Testing pag contatos</h1> 
    )
}

export default App;

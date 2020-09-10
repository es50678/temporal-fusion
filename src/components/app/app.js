import React from 'react';

import './app.css';
import logo from '../../assets/images/logo.svg';
import { Game } from '../game';
import { ShoppingList } from '../shopping-list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Game />
      <ShoppingList />
    </div>
  );
}

export { App };

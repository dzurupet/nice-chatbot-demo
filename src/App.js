import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import chatbot from './chatbot.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="Img" src={chatbot} alt="" />
      </div>
    );
  }
}

export default App;

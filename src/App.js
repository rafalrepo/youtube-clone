import React from 'react';
import { BrowserRouter as Router,
         Switch,
         Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Siedbar from './components/Siedbar';
import Content from './components/Content';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <main className="main">
            <Siedbar />
            <Content />
          </main>
          {/* <h1>youtube clone </h1> */}
      </div>
    </Router>
  );
}

export default App;

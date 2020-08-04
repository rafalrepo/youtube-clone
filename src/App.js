import React from 'react';
import { BrowserRouter as Router,
         Switch,
         Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Siedbar from './components/Siedbar';
import Content from './components/Content';
import { VideoProvider } from './context/VideoContext';
import reducer, { initialState } from './context/reducer'

function App() {
  return (
    <Router>
       <VideoProvider reducer={reducer} initialState={initialState}>
        <div className="App">
            <Header />
            <main className="main">
              <Siedbar />
              <Content />
            </main>
        </div>
      </VideoProvider>
    </Router>
  );
}

export default App;

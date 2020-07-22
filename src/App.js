import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      {/*This is related to Dashboard.js component. Every component should be rendered here to appear in the index.html*/}
      <Dashboard />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Todo List App</h1>
      </header>
      <Todos />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloReact from "./HelloReact";

function App() {
  return (
    <div className="App">
      <HelloReact name={"Danil"}/>
      <HelloReact name={"Artem"}/>
      <HelloReact name={"Dima"}/>
    </div>
  );
}

export default App;

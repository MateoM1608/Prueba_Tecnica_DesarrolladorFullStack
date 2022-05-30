import React from 'react'
import { Route } from 'react-router-dom' 
import './App.css';
import Inicio from './components/Inicio/Inicio'
import Form from './components/Form/Form';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Inicio} />
      <Route exact path="/ruta-protegida" component={Form} />
    </div>
  );
}

export default App;

import React,{useState} from 'react'
import { Route } from 'react-router-dom' 
import './App.css';
import Inicio from './components/Inicio/Inicio'
import Form from './components/Form/Form';


function App() {

  const createUser = (body) =>{

  }

  const [isOpenModalSignUp, setIsOpenModalSignUp] = useState(false);
  const [isOpenModalLogIn, setIsOpenModalLogIn] = useState(false);
  const toggleModalSignUp = () => {
    setIsOpenModalSignUp(!isOpenModalSignUp);
  };
  const toggleModalLogIn = () => {
    setIsOpenModalLogIn(!isOpenModalLogIn);
  };


  return (
    <div className='App'>

      <Route exact path="/" render={() => <Inicio/> } />
      <Route exact path="/registro" render={() => <Form/>} />

    </div>
      
  );
}

export default App;

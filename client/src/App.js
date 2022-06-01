import React,{useState} from 'react'
import { Route } from 'react-router-dom' 
import './App.css';
import Inicio from './components/Inicio/Inicio'
import Form from './components/Form/Form';
import LogIn from './components/Login/Login'
import FileUploader from './components/FileUploader/FileUploader'


function App() {

  const createUser = (body) =>{

  }

  const [isOpenModalLogIn, setIsOpenModalLogIn] = useState(false);
 
  const toggleModalLogIn = () => {
    setIsOpenModalLogIn(!isOpenModalLogIn);
  };

  console.log('estado', isOpenModalLogIn)


  return (
    <div className='App'>

      <Route exact path="/" render={() => <Inicio/> } />
      <Route exact path="/registro" render={() => <Form toggleModalLogIn={toggleModalLogIn}/>} />
      <Route exact path="/ruta-segura" render={() => <FileUploader/>} />
      <LogIn 
        toggleModalLogIn={toggleModalLogIn}
        isOpenModalLogIn={isOpenModalLogIn}
      />
    </div>
      
  );
}

export default App;

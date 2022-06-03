import React,{useState, useContext} from 'react'
import { Route, useHistory } from 'react-router-dom' 
import './App.css';
import Inicio from './components/Inicio/Inicio'
import Form from './components/Form/Form';
import LogIn from './components/Login/Login'
import FileUploader from './components/FileUploader/FileUploader'
import axios from 'axios'
import swal from 'sweetalert';



function App() {

  const history = useHistory()
  const [isOpenModalLogIn, setIsOpenModalLogIn] = useState(false);

  const createUser = (body) =>{
    axios.post('http://localhost:3001/auth/signup', body)
    .then(res => {
      if(res.data.msg === "This email already exist") {
        swal("Email existente!", "Por favor cambia de email!", "error");
      }else{
        swal("Usuario creado exitosamente!", "Ahora puedes iniciar sesión!", "success")
      }
    })
  }

  const logIn = (body) => {
    axios.post('http://localhost:3001/auth/signin', body)
    .then( res => {
      console.log(res)
      if(res.data.message === "Invalid password" || res.data.message === "User not found"){
        swal("Dato incorrecto!", "Correo electronico y/o contraseña incorrecta!", "error");
      }else{
        swal(`Hola ${res.data.name}!`, "Bienvenido!", "success")
        history.push("/ruta-segura")
        toggleModalLogIn()
      }
    })
  }

  const toggleModalLogIn = () => {
    setIsOpenModalLogIn(!isOpenModalLogIn);
  };



  return (
      <div className='App'>

        <Route exact path="/" render={() => <Inicio/> } />
        <Route exact path="/registro" render={() => <Form toggleModalLogIn={toggleModalLogIn} createUser={createUser}/>} />
        <Route exact path="/ruta-segura" render={() => <FileUploader/>} />
        <LogIn 
          toggleModalLogIn={toggleModalLogIn}
          isOpenModalLogIn={isOpenModalLogIn}
          logIn={logIn}
        />
      </div>
  );
}

export default App;

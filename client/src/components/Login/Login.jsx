import React, { useState } from "react";
import './Login.css'
import swal from 'sweetalert';

const LogIn = ({ isOpenModalLogIn, toggleModalLogIn , logIn}) => {

  const [ login , setLogin ] = useState({
    email: "",
    password: ""
  })
    
  const handleChange =(e) =>{
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(login.password && login.email){
      logIn(login)
      setLogin({
        email: "",
        password: ""
      })
    }else{
      swal("Dato errado!", "Algun dato que ingresaste es incorrecto!", "error");
    }

  }

  return (
    <div className={ isOpenModalLogIn ? "popup" : "pupopHidden"}>
      <button onClick={() => toggleModalLogIn()} className="close-btn">X</button>
      <div className="form">
        <h2 className="login">Iniciar sesión</h2>
          <form onSubmit={(e) => handleSubmit(e)}> 
            <div className="form-element">
                <label className="labelLogin">Correo electronico:</label>
                <input 
                  type="text" 
                  name="email" 
                  value={login.email}
                  onChange={ (e) => handleChange(e)}
                  placeholder="Ingrese Correo" 
                  className="inputLogin"
                />
            </div>
            <div className="form-element">
                <label className="labelLogin">Contraseña:</label>
                <input 
                  type="password" 
                  name="password"
                  value={login.password}
                  onChange={ (e) => handleChange(e)}
                  placeholder="Ingrese Contraseña" 
                  className="inputLogin"
                />
            </div>
            <button className="btnLogin" type="submmit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  )
}

export default LogIn;

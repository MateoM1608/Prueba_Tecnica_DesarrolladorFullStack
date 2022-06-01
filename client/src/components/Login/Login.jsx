import React, { useState } from "react";
import './Login.css'

const LogIn = ({ isOpenModalLogIn, toggleModalLogIn }) => {

  const [ login , setLogin ] = useState({
    correo: "",
    contraseña: ""
  })
    
  const handleChange =(e) =>{
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

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
                  name="correo" 
                  value={login.correo}
                  onChange={ (e) => handleChange(e)}
                  placeholder="Ingrese Correo" 
                  className="inputLogin"
                />
            </div>
            <div className="form-element">
                <label className="labelLogin">Contraseña</label>
                <input 
                  type="password" 
                  name="contraseña"
                  value={login.contraseña}
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

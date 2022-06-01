import React, { useState } from "react";
import LogIn from '../Login/Login'
import './Form.css'

const Form = ({toggleModalLogIn}) => {

    const [ error , setError] = useState({
        email:"",
        confirmacion: ""
    })
    
    const [ estado, setEstado ] = useState({
        Nombre: "",
        Apellido: "",
        Celular: "",
        Correo: "",
        Contraseña: "",
        ConfirmarCon: "",
        genero: "",
        Ciudad:""
    })

    const handleChange = (e) => {
        setEstado({
            ...estado,
            [e.target.name]: e.target.value
        })
    }
    
    const handleGenre = (e)=>{
        console.log(e.target.value)
        console.log('funciona')
        setEstado({
            ...estado,
            genero : e.target.value
        })
    }

    const validateEmail = (e) => {
        !/(^[^@]+@[^@]+\.[a-zA-Z]{2,}$)/.test(e)
        ? setError({...error, email:"Este no es un email valido"})
        : setError({...error, email: ""});
        setEstado({
            ...estado,
            Correo: e
        })
    }

    const handlePassword = (e) => {
        setEstado({
            ...estado,
            Contraseña: e
        })
        e === estado.ConfirmarCon
        ? setError({...error, confirmacion: ""})
        : setError({...estado, confirmacion: "La contraseña no coincide"})
    }

    const validatePassword = (e) => {
        setEstado({
            ...estado,
            ConfirmarCon: e
        })
        estado.Contraseña === e
        ? setError({...error, confirmacion: ""})
        : setError({...estado, confirmacion: "La contraseña no coincide"})
    }

   const handleSubmit = (e) => {
        e.preventDefault()
        if(estado.Nombre  &&
        estado.Apellido &&
        estado.Celular &&
        estado.Correo &&
        estado.Contraseña &&
        estado.ConfirmarCon &&
        estado.genero &&
        estado.Ciudad &&
        !error.email &&
        !error.confirmacion){

        }
   }

    return (
        <div className="divGlobal">
                <div className="LogoPerspektiva"></div>
                <div className="container">
                    <div className="containerName">
                    <h1 className="nameForm">FORMULARIO DE REGISTRO</h1>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="divRow">
                            <div className="icon" style={{backgroundImage: "url("+"https://img2.freepng.es/20181125/ewk/kisspng-computer-icons-user-scalable-vector-graphics-clip-user-registration-icon-bing-images-5bfac692a07363.8004242815431614906572.jpg"+")"}}>
                                <input 
                                type="text"
                                name="Nombre"
                                value={estado.Nombre}
                                onChange={(e) => handleChange(e)}
                                placeholder="Nombre"
                                className="input"
                                />
                            </div>
                            <div className="icon" style={{backgroundImage: "url("+"https://img2.freepng.es/20181125/ewk/kisspng-computer-icons-user-scalable-vector-graphics-clip-user-registration-icon-bing-images-5bfac692a07363.8004242815431614906572.jpg"+")"}}>
                                <input 
                                type="text"
                                name="Apellido"
                                value={estado.Apellido}
                                onChange={(e) => handleChange(e)}
                                placeholder="Apellido"
                                className="input"
                            />
                            </div>
                            
                        </div>
                        <div className="divRow">
                            <div className="icon" style={{backgroundImage: "url("+"https://w7.pngwing.com/pngs/318/386/png-transparent-smartphone-computer-icons-smartphone-blue-gadget-electronics.png"+")"}}>
                                <input 
                                    type="number"
                                    name="Celular"
                                    value={estado.Celular}
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Celular"
                                    className="input"
                                    />
                            </div>
                            <div className="icon" style={{backgroundImage: "url("+"https://illustoon.com/photo/2751.png"+")"}}>
                                <input 
                                    type="text"
                                    name="Correo"
                                    value={estado.Correo}
                                    onChange={(e) => validateEmail(e.target.value)}
                                    placeholder="Correo"
                                    className="input"
                                />
                                
                            </div>
                            
                        </div>
                        {!error.email === "" ? null : <span className="dangerCorreo">{error.email}</span>}
                        <div className="divRow">
                            <div className="icon" style={{backgroundImage: "url("+"https://w7.pngwing.com/pngs/932/680/png-transparent-computer-icons-padlock-padlock-blue-technic-desktop-wallpaper.png"+")"}}>
                                <input 
                                    type="password"
                                    name="Contraseña"
                                    value={estado.Contraseña}
                                    onChange={(e) => handlePassword(e.target.value)}
                                    placeholder="Contraseña"
                                    className="input"
                                />
                            </div>
                            <div className="icon" style={{backgroundImage: "url("+"https://as1.ftcdn.net/v2/jpg/02/22/36/20/1000_F_222362022_uTiHN51vzcwCoyIHay4u37PGPjzx1GBm.jpg"+")"}}>
                                <input 
                                    type="password"
                                    name="ConfirmarCon"
                                    value={estado.ConfirmarCon}
                                    onChange={(e) => validatePassword(e.target.value)}
                                    placeholder="Confirmar contraseña"
                                    className="input"
                                />
                            </div>
                        </div>
                        {!error.confirmacion === "" ? null : <span className="dangerPassword">{error.confirmacion}</span>}
                        <div className="divRow">
                            <div className="genero">
                                <div className="iconGenero" style={{backgroundImage: "url("+"data:image/png;base64,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"+")"}}>
                                <input 
                                    type="text"
                                    placeholder="Genero"
                                    value={estado.genero}
                                    disabled
                                    className="inputGenero"
                                    />
                                </div>
                                
                                <label className="radius"> M
                                <input 
                                    type="radio"
                                    name="genero"
                                    value="Masculino"
                                    onChange={(e) => handleGenre(e) }
                                />
                                </label>
                                <label className="radius"> F
                                <input 
                                    type="radio"
                                    name="genero"
                                    value="Femenino"
                                    onChange={(e) => handleGenre(e) }
                                />
                                </label>
                            </div>
                            <div className="iconCiudad" style={{backgroundImage: "url("+"https://thumbs.dreamstime.com/b/trace-el-perno-indicador-de-los-gps-icono-azul-del-vector-104513434.jpg"+")"}}>
                                <input 
                                    type="text"
                                    name="Ciudad"
                                    value={estado.Ciudad}
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Ciudad"
                                    className="inputCiudad"
                                />
                            </div>
                        </div>
                        <div className="btnBack">
                        <button className="btn" type="submit">REGISTRAR</button>
                        </div>
                    </form>
                </div>
                <p className="txt">¿Ya tienes una cuenta?</p>
                <button onClick={() => toggleModalLogIn()} className="btnInicio">Inicia sesión</button>
        </div>
    )
}

export default Form
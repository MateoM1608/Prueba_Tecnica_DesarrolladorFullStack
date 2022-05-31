import React, { useState } from "react";
import './Form.css'

const Form = () => {

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

    const handleChange = () => {

    }

    return (
        <div className="divGlobal">
                <div className="container">
                    <div className="containerName">
                    <h1 className="nameForm">FORMULARIO DE REGISTRO</h1>
                    </div>
                    <form>
                        <div>
                            <input 
                            type="text"
                            name="Nombre"
                            value={estado.Nombre}
                            onChange={(e) => handleChange(e.target.value)}
                            placeholder="Nombre"
                            />
                            <input 
                            type="text"
                            name="Apellido"
                            value={estado.Apellido}
                            onChange={(e) => handleChange(e.target.value)}
                            placeholder="Apellido"
                            />
                        </div>
                        <div>
                            <input 
                                type="text"
                                name="Celular"
                                value={estado.Celular}
                                onChange={(e) => handleChange(e.target.value)}
                                placeholder="Celular"
                                />
                                <input 
                                type="text"
                                name="Correo"
                                value={estado.Correo}
                                onChange={(e) => handleChange(e.target.value)}
                                placeholder="Correo"
                            />
                        </div>
                        <div>
                            <input 
                                type="text"
                                name="Contraseña"
                                value={estado.Contraseña}
                                onChange={(e) => handleChange(e.target.value)}
                                placeholder="Contraseña"
                            />
                            <input 
                                type="text"
                                name="ConfirmarCon"
                                value={estado.ConfirmarCon}
                                onChange={(e) => handleChange(e.target.value)}
                                placeholder="Confirmar contraseña"
                            />
                        </div>
                        <div>
                            <div>
                                <input 
                                    type="text"
                                    name="Contraseña"
                                    value={estado.Contraseña}
                                    onChange={(e) => handleChange(e.target.value)}
                                    placeholder="Genero"
                                    disabled
                                />
                                <p> M
                                <input 
                                    type="radio"
                                    name="Genero"
                                    value="Masculino"
                                />
                                </p>
                                <p> F
                                <input 
                                    type="radio"
                                    name="Genero"
                                    value="Femenino"
                                />
                                </p>
                            </div>
                            <input 
                                type="text"
                                name="Ciudad"
                                value={estado.Ciudad}
                                onChange={(e) => handleChange(e.target.value)}
                                placeholder="Ciudad"
                            />

                        </div>
                            <button className="btn" type="submit">REGISTRAR</button>
                    </form>
                </div>
        </div>
    )
}

export default Form
import React from "react";
import { Link } from 'react-router-dom'
import './Inicio.css'

const Inicio = () => {
    return (
        <div className="global">
            <div className="position">
                <div>
                    <h1 className="txt-bienven">Bienvenidos</h1>
                    <h2 className="txt-feria">a la Feria Virtual</h2>
                </div>
                <div >
                    <h3 className="texto">Registrate para vivir</h3>
                    <h3 className="texto">la experiencia virtual.</h3>
                </div>
                < Link to="/registro">
                    <button className="btn-regist">Registrarme</button>
                </Link>
            </div>
            <div className="LogoPerspektivaInicio"></div>
        </div>
    )
}

export default Inicio
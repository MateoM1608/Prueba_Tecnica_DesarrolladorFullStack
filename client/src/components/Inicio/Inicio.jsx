import React from "react";
import { Link } from 'react-router-dom'

const Inicio = () => {
    return (
        <div>
            <div>
            <h1>Bienvenidos</h1>
            <h2>a la Feria Virtual</h2>
            </div>
            <div>
                <h3>Registrate para vivir</h3>
                <h3>la experiencia virtual.</h3>
            </div>
            < Link to="/ruta-protegida">
            <button>Registrarme</button>
            </Link>
        </div>
    )
}

export default Inicio
import React from "react";
import './login.css'
export function Formulario() {
    return (
        <div className="formulario">
            <h1>Inicio de sesion</h1>
            <form method="post">
                <div className="username">
                    <input type="text" required></input>
                    <label>Nombre de usuario</label>
                </div>
                <div className="username">
                    <input type="password" required ></input>
                    <label>Contraseña</label>
                </div>
                <div className="recordar">¿Olvido su contraseña?</div>
                <input type="submit" value="Iniciar"></input>
                <div className="registrarse">Quiero <a href="">Registrarme</a> </div>
            </form>
        </div>
    )
}
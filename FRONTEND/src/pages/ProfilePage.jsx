import { useState } from "react";
import "../Styles/ProfilePage.css";

export default function ProfilePage() {
    const [puntuacion, setPuntuacion] = useState(0);
    const [logros, setLogros] = useState({
        logro1: false,
        logro2: false,
        logro3: false
    });

    const aumentarPuntuacion = (valor) => {
        const nuevaPuntuacion = puntuacion + valor;
        setPuntuacion(nuevaPuntuacion);

        setLogros((prev) => ({
            ...prev,
            logro1: nuevaPuntuacion >= 100 ? true : prev.logro1,
            logro2: nuevaPuntuacion >= 500 ? true : prev.logro2,
            logro3: nuevaPuntuacion >= 1000 ? true : prev.logro3
        }));
    };

    return (
        <>
            <h1>Perfil de Jugador</h1>
            <div className="ProfileContainer">

                <div className="Nombre">
                    <h2>Nombre de Jugador: <label id="nombreUsuario"></label></h2>
                </div>

                <div className="Nivel">
                    <h2>Nivel de jugador: <label id="nivelUsuario"></label></h2>
                </div>

                <div className="Logros">
                    <h2>Logros</h2>
                    <div 
                        className={`Logro1 ${logros.logro1 ? "desbloqueado" : ""}`} 
                        title="Princeso: Obtén 100 puntos"
                    >
                       Princeso
                    </div>
                    <div 
                        className={`Logro2 ${logros.logro2 ? "desbloqueado" : ""}`} 
                        title="Experto: Obtén 500 puntos"
                    >
                        Experto
                    </div>
                    <div 
                        className={`Logro3 ${logros.logro3 ? "desbloqueado" : ""}`} 
                        title="Leyenda: Obtén 1000 puntos"
                    >
                        Leyenda
                    </div>
                    <p>Puntuación: {puntuacion}</p>
                </div>
                <div> {/*Boton de prueba, borrar en la version final*/}
                    <button onClick={() => aumentarPuntuacion(50)}>+50 puntos</button>
                </div>
            </div>
        </>
    );
}

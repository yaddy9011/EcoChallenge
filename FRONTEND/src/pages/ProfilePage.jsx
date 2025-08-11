
import "../Styles/ProfilePage.css"
export default function  ProfilePage() {
    const consulta=()=>{

    }
    return(
        <>
            <h1>Perfil de Jugador</h1>
            <div className="ProfileContainer">
                <img></img>

                <div className="Nombre">
                <h2>Nombre de Jugador:<label id="nombreUsuario"></label></h2>
                </div>

                <div className="Nivel">
                    <h2>Nivel de jugador:<label id="nivelUsuario"></label></h2>
                </div>

                <div className="Logros">
                    <h2>Logros</h2>
                    <div id="Logro1"></div>
                    <div id="Logro2"></div>
                    <div id="Logro3"></div>
                </div>
            </div>
        </>
    )
}

import "../Styles/ProfilePage.css"
export default function  ProfilePage() {
    const consulta=()=>{

    }
    return(
        <>
            <h1>Perfil de Jugador</h1>
            <div className="ProfileContainer">
                <img></img>
                <h2>Nombre de Jugador</h2>
                <div className="ProfileLevel">Nivel de Jugador</div>
                <div className="GoalsHit">
                    <h2>Hitos</h2>
                    <p>Puntos Acumulados y Retos Cumplidos</p>
                </div>
            </div>
        </>
    )
}
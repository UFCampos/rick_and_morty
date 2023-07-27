import axios from "axios"
import { useParams} from "react-router-dom"
import { useState, useEffect } from "react"

export default function Detail() {
    //Consigue la id del personaje
    const { id } = useParams()
    //Crea el estado local iniciado como objeto vacío
    const [character, setCharacter] = useState({})
    //Realiza la petición de los detalles del personaje cuando el componente se monta y cada vez que la id cambia
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {//Si no se encontró el id lanza error
              window.alert('No hay personajes con ese ID');
           }
        });
        //Retorna el estado vacío cuando se desmonta el componente
        return setCharacter({});
     }, [id]);
    return (
        //Renderiza condicionalmente las props de los personajes
        <div>
            {character.name? (
                <div>
                    <h1>{character.name}</h1>
                    <img src={character.image} alt={character.name} />
                    <p>Estado: "{character.status}"</p>
                    <p>Especie: "{character.species}"</p>
                    <p>Género: "{character.gender}"</p>
                    <p>Origen: "{character.origin.name}"</p>
                    <p>Ubicación: "{character.location.name}"</p>
                    <p>Creado el: "{character.created}"</p>
                </div>
            ) : null}
        </div>
    )
}